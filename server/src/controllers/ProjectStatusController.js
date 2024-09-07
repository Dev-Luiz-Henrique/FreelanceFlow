const ProjectStatusService = require('../services/ProjectStatusService');
const handleHttpError = require("../middlewares/httpErrorHandler");

/**
 * Handles the request to retrieve all project statuses.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with a list of all project statuses.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getAllProjectStatus = async (req, res, next) => {
    try {
        const status = ProjectStatusService.getAllProjectStatus();
        res.status(200).json(status);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a project status by its ID.
 *
 * @param {Request} req - The request object, containing the project status ID in `req.params`.
 * @param {Response} res - The response object used to send the project status data.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with the project status object corresponding to the given ID.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getProjectStatusById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const state = ProjectStatusService.findProjectStatusById(parseInt(id, 10));
        res.status(200).json(state);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a project status by its value.
 *
 * @param {Request} req - The request object, containing the project status value in `req.params`.
 * @param {Response} res - The response object used to send the project status data.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with the project status object corresponding to the given value.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getProjectStatusByValue = async (req, res, next) => {
    try {
        const { value } = req.params;
        const status = ProjectStatusService.findProjectStatusByValue(value);
        res.status(200).json(status);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

module.exports = {
    getAllProjectStatus,
    getProjectStatusById,
    getProjectStatusByValue,
};