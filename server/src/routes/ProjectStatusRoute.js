const express = require('express');
const router = express.Router();
const ProjectStatusController = require('../controllers/ProjectStatusController');

/**
 * Retrieves a Project Status by its ID.
 * 
 * @route GET /project-status/:id
 * @param {string} value - The ID of the Project Status to be retrieved.
 * @returns {Object} The Project Status object with the specified ID.
 * @returns {404} If no Project Status is found with the specified ID.
 * @returns {400} If the ID parameter is invalid
 * @returns {500} If an internal server error occurs
 */
router.get('/project-status/:id', ProjectStatusController.getProjectStatusById);

/**
 * Retrieves a Project Status by its value.
 * 
 * @route GET /project-status/value/:value
 * @param {string} value - The value of the Project Status to be retrieved.
 * @returns {Object} The Project Status object with the specified value.
 * @returns {404} If no Project Status is found with the specified value.
 * @returns {400} If the value parameter is invalid
 * @returns {500} If an internal server error occurs
 */
router.get('/project-status/value/:value', ProjectStatusController.getProjectStatusByValue);

/**
 * Retrieves a list of all Project Statuses.
 * 
 * @route GET /project-status
 * @returns {Array<Object>} A list of all Project Status objects.
 * @returns {500} If an internal server error occurs
 */
router.get('/project-status/', ProjectStatusController.getAllProjectStatus);

module.exports = router;