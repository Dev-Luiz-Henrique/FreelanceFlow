const OfferStatusService = require('../services/OfferStatusService');
const handleHttpError = require("../middlewares/httpErrorHandler");

/**
 * Handles the request to retrieve all Offer statuses.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send the Offer status data.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with a list of all Offer statuses.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getAllOfferStatus = async (req, res, next) => {
    try {
        const status = OfferStatusService.getAllOfferStatus();
        res.status(200).json(status);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a Offer status by its ID.
 *
 * @param {Request} req - The request object, containing the Offer status ID in `req.params`.
 * @param {Response} res - The response object used to send the Offer status data.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with the Offer status object corresponding to the given ID.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getOfferStatusById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const state = OfferStatusService.findOfferStatusById(parseInt(id, 10));
        res.status(200).json(state);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

/**
 * Handles the request to retrieve a Offer status by its value.
 *
 * @param {Request} req - The request object, containing the Offer status value in `req.params`.
 * @param {Response} res - The response object used to send the Offer status data.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Sends a JSON response with the Offer status object corresponding to the given value.
 * @throws {Error} Passes errors to the error handling middleware.
 */
const getOfferStatusByValue = async (req, res, next) => {
    try {
        const { value } = req.params;
        const status = OfferStatusService.findOfferStatusByValue(value);
        res.status(200).json(status);
    } catch (error) {
        handleHttpError(error, req, res);
    }
};

module.exports = {
    getAllOfferStatus,
    getOfferStatusById,
    getOfferStatusByValue,
};