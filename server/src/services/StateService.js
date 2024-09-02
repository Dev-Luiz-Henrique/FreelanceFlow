const StatesEnum = require("../enums/StateEnum.js");
const { NotFoundError, ValidationError } = require("../utils/errors");

/**
 * Retrieves a list of all states.
 * 
 * @returns {Array<Object>} An array containing all state objects.
 *                          Each object includes the state's id, name, and code.
 */
const getAllStates = () => {
    return Object.values(StatesEnum);
};

/**
 * Retrieves a specific state by its ID.
 *
 * @param {number} id - The ID of the state to be retrieved.
 * @returns {Object} The state object corresponding to the given ID.
 *                   The object includes the state's id, name, and code.
 * @throws {NotFoundError} Throws an error if no state is found with the specified ID.
 * @throws {ValidationError} Throws an error if the ID parameter is invalid.
 */
const findStateById = (id) => {
    if (isNaN(id) || id <= 0)
        throw new ValidationError("Invalid ID parameter, type a number between (1-27).");

    const state = Object.values(StatesEnum).find(state => state.id === id);
    if (!state) {
        throw new NotFoundError(`State ID '${id}' was not found.`);
    }
    return state;
};

/**
 * Retrieves a specific state by its code.
 *
 * @param {string} code - The code of the state to be retrieved (e.g., 'AC' for Acre).
 * @returns {Object} The state object corresponding to the given code.
 *                   The object includes the state's id, name, and code.
 * @throws {NotFoundError} Throws an error if no state is found with the specified code.
 * @throws {ValidationError} Throws an error if the code parameter is invalid.
 */
const findStateByCode = (code) => {
    if (typeof code !== 'string' || code.trim() === '') 
        throw new ValidationError("Invalid code parameter.");
    
    const state = Object.values(StatesEnum).find(state => state.code === code.toUpperCase());
    if (!state) {
        throw new NotFoundError(`State code '${code}' was not found.`);
    }
    return state;
};

module.exports = {
    getAllStates,
    findStateById,
    findStateByCode
};
