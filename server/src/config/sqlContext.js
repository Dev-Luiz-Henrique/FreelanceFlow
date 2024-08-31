const Sequelize = require("sequelize");
const OwnerModel = require("../models/Owner");
const FreelancerModel = require("../models/Freelancer");

// Cria uma instância de conexão com um banco de dados
const sequelize = new Sequelize(
    process.env.SQL_DB_NAME,
    process.env.SQL_DB_USER,
    process.env.SQL_DB_PASSWORD,
    {
        host: process.env.SQL_DB_HOST,
        dialect: "mssql",
        port: process.env.SQL_DB_PORT
    }
);

// Verifica se é possível estabelecer uma conexão com o banco de dados
const authDB = async () => {
    if (process.env.NODE_ENV === 'test') {
        console.log('Skipping database connection for test environment');
        return;
    }
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

// Sincroniza os modelos com o banco de dados
const syncDB = async () => {
    if (process.env.NODE_ENV === 'test') {
        console.log('Skipping database connection for test environment');
        return;
    }
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
const Owner = OwnerModel(sequelize);
const Freelancer = FreelancerModel(sequelize);

module.exports = {
    sequelize,
    authDB,
    syncDB,
    closeDB,
    Owner,
    Freelancer,
};
