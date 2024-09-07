const OfferStatusEnum = require('../enums/OfferStatusEnum');
const { NotFoundError, ValidationError } = require('../utils/errors');

/**
 * Retrieves a list of all Offer statuses.
 * 
 * @returns {Array<Object>} An array containing all Offer status objects.
 *                          Each object includes the Offer status's id, name, and value.
 */
const getAllOfferStatus = () => {
    return Object.values(OfferStatusEnum);
};

/**
 * Retrieves a specific Offer status by its ID.
 *
 * @param {number} id - The ID of the Offer status to be retrieved.
 * @returns {Object} The Offer status object corresponding to the given ID.
 *                   The object includes the Offer status's id, name, and value.
 * @throws {NotFoundError} Throws an error if no Offer status is found with the specified ID.
 * @throws {ValidationError} Throws an error if the ID parameter is invalid.
 */
const findOfferStatusById = (id) => {
    if (isNaN(id) || id <= 0 || id > 3)
        throw new ValidationError("Invalid ID parameter, type a number between (1-3).");

    const status = Object.values(OfferStatusEnum).find(status => status.id === id);
    if (!status) 
        throw new NotFoundError(`State ID '${id}' was not found.`);

    return status;
};

/**
 * Retrieves a specific Offer Status by its value.
 *
 * @param {string} value - The value of the Offer Status to be retrieved.
 * @returns {Object} The Offer Status object corresponding to the given value.
 *                   The object includes the Offer Status's id, name, and value.
 * @throws {NotFoundError} Throws an error if no Offer Status is found with the specified value.
 * @throws {ValidationError} Throws an error if the value parameter is invalid.
 */

const findOfferStatusByValue = (value) => {
    if (typeof value !== 'string')
        throw new ValidationError("Invalid value parameter, expected a string.");
    
    const status = Object.values(OfferStatusEnum).find(status => status.value === value);
    if (!status) 
        throw new NotFoundError(`Offer status value '${value}' was not found.`);
    return status;
};

module.exports = {
    getAllOfferStatus,
    findOfferStatusById,
    findOfferStatusByValue
};