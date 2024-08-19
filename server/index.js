require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./src/config/sqlContext.js");
const port = process.env.PORT || 3002;

// 
app.use(cors());
app.use(express.json());

// Conectando ao banco de dados
database.authDB();
database.syncDB();

// Rotas exemplo
app.get("/teste", (req, res) => {
    // Lógica para buscar freelancers do banco de dados
    res.json([
        { id: 1, name: "João" },
        { id: 2, name: "Maria" },
    ]);
});

// Importando as rotas
const ownerRoutes = require('./src/routes/OwnerRoute');

// Usando as rotas
app.use('/', ownerRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
