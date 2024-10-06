import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authDB, syncDB } from './config/sqlContext.js';
import routes from './routes/index.js';
import handleHttpError from './middlewares/httpErrorHandler.js';
import NotFoundError from './utils/errors/NotFoundError.js';

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {   
    authDB();
    syncDB();
}

// Initialize routes
routes(app);

// Middleware to capture undefined routes
app.use((req, res, next) => {
    next(new NotFoundError(`Route ${req.originalUrl} not found`));
});

// Error handling middleware
app.use(handleHttpError);

export default app;