require('dotenv').config();
const express = require("express");
const cors = require("cors");
const database = require("./config/sqlContext.js");

const app = express();

app.use(cors());
app.use(express.json());

// Conectando ao banco de dados
database.authDB();
database.syncDB();

if (process.env.NODE_ENV !== 'test') {   
    database.authDB();
    database.syncDB();
}


// Importando as rotas
const ownerRoutes = require('./routes/OwnerRoute');
const freelancerRoutes = require('./routes/FreelancerRoute');

// Usando as rotas
app.use('/', ownerRoutes);
app.use('/', freelancerRoutes);

module.exports = app;
