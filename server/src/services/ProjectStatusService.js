const ProjectStatusEnum = require('../enums/ProjectStatusEnum');
const { NotFoundError, ValidationError } = require('../utils/errors');

/**
 * Retrieves a list of all Project statuses.
 * 
 * @returns {Array<Object>} An array containing all project status objects.
 *                          Each object includes the Project status's id, name, and value.
 */
const getAllProjectStatus = () => {
    return Object.values(ProjectStatusEnum);
};

/**
 * Retrieves a specific Project status by its ID.
 *
 * @param {number} id - The ID of the Project status to be retrieved.
 * @returns {Object} The Project status object corresponding to the given ID.
 *                   The object includes the Project status's id, name, and value.
 * @throws {NotFoundError} Throws an error if no Project status is found with the specified ID.
 * @throws {ValidationError} Throws an error if the ID parameter is invalid.
 */
const findProjectStatusById = (id) => {
    if (isNaN(id) || id <= 0 || id > 5)
        throw new ValidationError("Invalid ID parameter, type a number between (1-5).");

    const status = Object.values(ProjectStatusEnum).find(status => status.id === id);
    if (!status) 
        throw new NotFoundError(`State ID '${id}' was not found.`);

    return status;
};

/**
 * Retrieves a specific Project Status by its value.
 *
 * @param {string} value - The value of the Project Status to be retrieved.
 * @returns {Object} The Project Status object corresponding to the given value.
 *                   The object includes the Project Status's id, name, and value.
 * @throws {NotFoundError} Throws an error if no Project Status is found with the specified value.
 * @throws {ValidationError} Throws an error if the value parameter is invalid.
 */

const findProjectStatusByValue = (value) => {
    if (typeof value !== 'string')
        throw new ValidationError("Invalid value parameter, expected a string.");

    const status = Object.values(ProjectStatusEnum).find(status => status.value === value);
    if (!status) 
        throw new NotFoundError(`Project status value '${value}' was not found.`);
    return status;
};

module.exports = {
    getAllProjectStatus,
    findProjectStatusById,
    findProjectStatusByValue
};