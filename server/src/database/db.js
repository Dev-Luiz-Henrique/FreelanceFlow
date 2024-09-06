require("dotenv").config();
const Sequelize = require("sequelize");
const fs = require("fs");
const path = require('path');

const sequelize = new Sequelize(
    process.env.SQL_DB_NAME,
    process.env.SQL_DB_USER,
    process.env.SQL_DB_PASSWORD,
    {
        host: process.env.SQL_DB_HOST,
        dialect: "mssql",
        port: process.env.SQL_DB_PORT,
    }
);

/**
 * Executes a single SQL script file.
 * @param {string} scriptPath - Path to the SQL script file.
 */
async function runScript(scriptPath) {
    try {
        const script = fs.readFileSync(scriptPath, "utf-8");
        await sequelize.query(script);
        console.log(`Script executed successfully: ${path.basename(scriptPath)}`);
    } catch (err) {
        console.error(`Error executing script ${path.basename(scriptPath)}:`, err);
    }
}

/**
 * Executes all SQL script files in a given folder.
 * @param {string} folderPath - Path to the folder containing SQL scripts.
 */
async function runAllScriptsFromFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        if (fs.statSync(filePath).isFile() && file.endsWith(".sql"))
            await runScript(filePath);
    }
}

/**
 * Runs all migration and seed scripts.
 */
async function runAllScripts() {
    try {
        await sequelize.authenticate();
        console.log("Connection to the database has been established successfully.");

        console.log("Running setup script...");
        await runScript(path.join(__dirname, "scripts/setup.sql"));

        console.log("Starting migration scripts...");
        await runAllScriptsFromFolder(path.join(__dirname, "migrations"));

        console.log("Starting seed scripts...");
        await runAllScriptsFromFolder(path.join(__dirname, "seeds"));
    } catch (err) {
        console.error("Error during script execution:", err);
    } finally {
        await sequelize.close();
    }
}

// Execute all scripts
runAllScripts();