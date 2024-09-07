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
const OwnerRoutes = require('./routes/OwnerRoute');
const FreelancerRoutes = require('./routes/FreelancerRoute');
const StateRoute = require('./routes/StateRoute');

// Using routes
app.use('/', OwnerRoutes);
app.use('/', FreelancerRoutes);
app.use('/', StateRoute);

const handleHttpError = require("./middlewares/httpErrorHandler.js");
const NotFoundError = require("./utils/errors/NotFoundError.js");

// Middleware to capture undefined routes
app.use((req, res, next) => {
    next(new NotFoundError(`Route ${req.originalUrl} not found`));
});
// Error handling middleware
app.use(handleHttpError);

module.exports = app;