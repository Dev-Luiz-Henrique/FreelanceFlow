const StatesService = require("../services/StateService");
const handleHttpError = require("../middlewares/httpErrorHandler");

/**
 * Handles the request to retrieve all states.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 */
const getAllStates = async (req, res, next) => {
    try {
        const states = StatesService.getAllStates();
        res.status(200).json(states);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a state by its ID.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 */
const getStateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const state = StatesService.findStateById(parseInt(id, 10));
        res.status(200).json(state);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a state by its code.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 */
const getStateByCode = async (req, res, next) => {
    try {
        const { code } = req.params;
        const state = StatesService.findStateByCode(code);
        res.status(200).json(state);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

module.exports = {
    getAllStates,
    getStateById,
    getStateByCode,
};
