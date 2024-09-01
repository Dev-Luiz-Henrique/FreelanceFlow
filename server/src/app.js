require('dotenv').config();
const express = require("express");
const cors = require("cors");
const database = require("./config/sqlContext.js");

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {   
    database.authDB();
    database.syncDB();
}

// Importing routes
const ownerRoutes = require('./routes/OwnerRoute');
const freelancerRoutes = require('./routes/FreelancerRoute');

// Using routes
app.use('/', ownerRoutes);
app.use('/', freelancerRoutes);


const handleHttpError = require("./middlewares/httpErrorHandler.js");
const NotFoundError = require("./utils/errors/NotFoundError.js");

// Middleware to capture undefined routes
app.use((req, res, next) => {
    next(new NotFoundError(`Route ${req.originalUrl} not found`));
});
// Error handling middleware
app.use(handleHttpError);

module.exports = app;
