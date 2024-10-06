import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';

dotenv.config();

/**
 * Creates a connection to the 'master' database for initial setup.
 */
const sequelizeMaster = new Sequelize(
    'master',
    process.env.SQL_DB_USER,
    process.env.SQL_DB_PASSWORD,
    {
        host: process.env.SQL_DB_HOST,
        dialect: "mssql",
        port: process.env.SQL_DB_PORT,
    }
);

/**
 * Creates a connection to the newly created database.
 */
function getSequelizeForFreelanceFlow() {
    return new Sequelize(
        process.env.SQL_DB_NAME,
        process.env.SQL_DB_USER,
        process.env.SQL_DB_PASSWORD,
        {
            host: process.env.SQL_DB_HOST,
            dialect: "mssql",
            port: process.env.SQL_DB_PORT,
        }
    );
}

/**
 * Executes a single SQL script file.
 * @param {Sequelize} sequelizeInstance - Sequelize instance to use for the query.
 * @param {string} scriptPath - Path to the SQL script file.
 */
async function runScript(sequelizeInstance, scriptPath) {
    try {
        const script = fs.readFileSync(scriptPath, "utf-8");
        await sequelizeInstance.query(script);
        console.log(`Script executed successfully: ${path.basename(scriptPath)}`);
    } catch (err) {
        console.error(`Error executing script ${path.basename(scriptPath)}:`, err);
    }
}

/**
 * Runs the setup and migration scripts.
 */
async function runAllScripts() {
    let sequelizeFreelanceFlow;
    try {
        // Connect to the 'master' database and create 'FreelanceFlow'
        await sequelizeMaster.authenticate();
        console.log("Connected to the 'master' database.");

        console.log("Running setup script to create the new database...");
        await runScript(sequelizeMaster, path.join(__dirname, "scripts/setup.sql"));

        // Close 'master' Reconnect using the new database
        await sequelizeMaster.close();
        sequelizeFreelanceFlow = getSequelizeForFreelanceFlow();
        await sequelizeFreelanceFlow.authenticate();
        console.log(`Connected to the newly created database: ${process.env.SQL_DB_NAME}`);

        // Run migrations in the new database
        console.log("Running migration scripts...");
        await runScript(sequelizeFreelanceFlow, path.join(__dirname, "scripts/migrations.sql"));

        // Run seed scripts
        // console.log("Running seed scripts...");
        // await runScript(sequelizeFreelanceFlow, path.join(__dirname, "scripts/seeds.sql"));
    } catch (err) {
        console.error("Error during script execution:", err);
    } finally {
        await sequelizeMaster.close();
        if (sequelizeFreelanceFlow) {
            await sequelizeFreelanceFlow.close();
        }
    }
}

// Execute all scripts
runAllScripts();