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
        port: process.env.SQL_DB_PORT,
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

// Carrega os modelos
const Owner = OwnerModel(sequelize);
const Freelancer = FreelancerModel(sequelize);

// Sincroniza os modelos com o banco de dados
const syncDB = async () => {
    try {
        await sequelize.sync(); // Cria as tabelas se elas não existirem
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

module.exports = {
    sequelize,
    authDB,
    syncDB,
    Owner,
    Freelancer,
};
