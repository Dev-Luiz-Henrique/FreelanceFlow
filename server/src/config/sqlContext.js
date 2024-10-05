const Sequelize = require("sequelize");
const Freelancer = require("../models/Freelancer");
const Owner = require("../models/Owner");

// Cria uma instância de conexão com um banco de dados
const sequelize = new Sequelize(
    process.env.SQL_DB_NAME,
    process.env.SQL_DB_USER,
    process.env.SQL_DB_PASSWORD,
    {
        host: process.env.SQL_DB_HOST,
        dialect: "mssql",
        port: process.env.SQL_DB_PORT,
        define: {
            freezeTableName: true,
            timestamps: false
        }
    }
);

// Verifica se é possível estabelecer uma conexão com o banco de dados
const authDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

// Sincroniza os modelos com o banco de dados
const syncDB = async () => {
    try {
        await sequelize.sync(); // Cria as tabelas se elas não existirem
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

const closeDB = async () => {
    try {
        await sequelize.close();
        console.log("Connection has been closed successfully.");
    } catch (error) {
        console.error("Error closing the connection:", error);
    }
};

// Models
Owner.init(sequelize);
Freelancer.init(sequelize);

module.exports = {
    sequelize,
    authDB,
    syncDB,
    closeDB,
    Owner,
    Freelancer,
};