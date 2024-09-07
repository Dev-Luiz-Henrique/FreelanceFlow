const express = require('express');
const router = express.Router();
const OfferStatusController = require('../controllers/OfferStatusController');

/**
 * Retrieves a Offer Status by its ID.
 * 
 * @route GET /offer-status/:id
 * @param {string} value - The ID of the Offer Status to be retrieved.
 * @returns {Object} The Offer Status object with the specified ID.
 * @returns {404} If no Offer Status is found with the specified ID.
 * @returns {400} If the ID parameter is invalid
 * @returns {500} If an internal server error occurs
 */
router.get('/offer-status/:id', OfferStatusController.getOfferStatusById);

/**
 * Retrieves a Offer Status by its value.
 * 
 * @route GET /offer-status/value/:value
 * @param {string} value - The value of the Offer Status to be retrieved.
 * @returns {Object} The Offer Status object with the specified value.
 * @returns {404} If no Offer Status is found with the specified value.
 * @returns {400} If the value parameter is invalid
 * @returns {500} If an internal server error occurs
 */
router.get('/offer-status/value/:value', OfferStatusController.getOfferStatusByValue);

/**
 * Retrieves a list of all Offer Statuses.
 * 
 * @route GET /Offer Status
 * @returns {Array<Object>} A list of all Offer Status objects.
 * @returns {500} If an internal server error occurs
 */
router.get('/offer-status/', OfferStatusController.getAllOfferStatus);

module.exports = router;