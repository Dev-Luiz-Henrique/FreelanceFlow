const ProjectAreaEnum = require("../services/ProjectAreaService");
const handleHttpError = require("../middlewares/httpErrorHandler");

/**
 * Handles the request to retrieve all project areas.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with a list of all project area objects.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getAllProjectAreas = async (req, res, next) => {
    try {
        const areas = await ProjectAreaService.getAllProjectAreas();
        res.status(200).json(areas);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a project area by its ID.
 *
 * @param {Request} req - The request object, containing the project area ID in `req.params`.
 * @param {Response} res - The response object used to send the project area data.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with the project area object corresponding to the given ID.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getProjectAreaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const area = await ProjectAreaService.findProjectAreaById(parseInt(id, 10));
        res.status(200).json(area);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a project area by its value.
 *
 * @param {Request} req - The request object, containing the project area value in `req.params`.
 * @param {Response} res - The response object used to send the project area data.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with the project area object corresponding to the given value.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getProjectAreaByValue = async (req, res, next) => {
    try {
        const { value } = req.params;
        const area = await ProjectAreaService.findProjectAreaByValue(value);
        res.status(200).json(area);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

module.exports = {
    getAllProjectAreas,
    getProjectAreaById,
    getProjectAreaByValue,
};