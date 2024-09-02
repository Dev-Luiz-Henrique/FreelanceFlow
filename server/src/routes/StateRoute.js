const express = require("express");
const router = express.Router();
const StateController = require("../controllers/StateController");

/**
 * Retrieves a state by its ID.
 * 
 * @route GET /states/:id
 * @param {number} id - The ID of the state to be retrieved.
 * @returns {Object} The state object with the specified ID.
 * @returns {404} If no state is found with the specified ID.
 */
router.get("/states/:id", StateController.getStateById);

/**
 * Retrieves a state by its code.
 * 
 * @route GET /states/code/:code
 * @param {string} code - The code of the state to be retrieved (e.g., 'AC' for Acre).
 * @returns {Object} The state object with the specified code.
 * @returns {404} If no state is found with the specified code.
 */
router.get("/states/code/:code", StateController.getStateByCode);

/**
 * Retrieves a list of all states.
 * 
 * @route GET /states
 * @returns {Array<Object>} A list of all state objects.
 */
router.get("/states", StateController.getAllStates);

module.exports = router;