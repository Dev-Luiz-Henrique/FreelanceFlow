const ProjectAreaEnum = require("../enums/ProjectAreaEnum.js");
const { NotFoundError, ValidationError } = require("../utils/errors");

/**
 * Retrieves an array of all project areas.
 * 
 * @returns {Array<Object>} An array containing all project area objects.
 *                          Each object includes the area's id, name, and value.
 */
const getAllProjectAreas = () => {
    return Object.values(ProjectAreaEnum);
};

/**
 * Retrieves a specific project area by its ID.
 *
 * @param {number} id - The ID of the project area to be retrieved.
 * @returns {Object} The project area object corresponding to the given ID.
 *                   The object includes the area's id, name, and value.
 * @throws {NotFoundError} Throws an error if no project area is found with the specified ID.
 * @throws {ValidationError} Throws an error if the ID parameter is invalid, i.e., not a positive number.
 */
const findProjectAreaById = (id) => {
    if (isNaN(id) || id <= 0)
        throw new ValidationError("Invalid ID parameter, expected a positive number.");

    const area = Object.values(ProjectAreaEnum).find(area => area.id === id);
    if (!area)
        throw new NotFoundError(`Area ID '${id}' was not found.`);
    return area;
};

/**
 * Retrieves a specific project area by its value.
 *
 * @param {string} value - The value of the project area to be retrieved.
 * @returns {Object} The project area object corresponding to the given value.
 *                   The object includes the area's id, name, and value.
 * @throws {NotFoundError} Throws an error if no project area is found with the specified value.
 * @throws {ValidationError} Throws an error if the value parameter is invalid, i.e., not a string.
 */
const findProjectAreaByValue = (value) => {
    if (typeof value !== 'string')
        throw new ValidationError("Invalid value parameter, expected a string.");

    const area = Object.values(ProjectAreaEnum).find(area => area.value === value);
    if (!area)
        throw new NotFoundError(`Area value '${value}' was not found.`);
    return area;
};

module.exports = {
    getAllProjectAreas,
    findProjectAreaById,
    findProjectAreaByValue
};