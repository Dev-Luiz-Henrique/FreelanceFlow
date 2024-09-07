const express = require("express");
const router = express.Router();
const ProjectAreaController = require("../controllers/ProjectAreaController");

/**
 * Retrieves a project area by its ID.
 *
 * @route GET /project-areas/:id
 * @param {number} id - The ID of the project area to be retrieved.
 * @returns {Object} The project area object with the specified ID.
 * @returns {404} If no project area is found with the specified ID.
 * @returns {400} If the ID parameter is invalid
 * @returns {500} If an internal server error occurs
 */
router.get("/project-areas/:id", ProjectAreaController.getProjectAreaById);

/**
 * Retrieves a project area by its value.
 *
 * @route GET /project-areas/value/:value
 * @param {string} value - The value of the project area to be retrieved.
 * @returns {Object} The project area object with the specified value.
 * @returns {404} If no project area is found with the specified value.
 * @returns {400} If the value parameter is invalid
 * @returns {500} If an internal server error occurs
 */
router.get("/project-areas/value/:value", ProjectAreaController.getProjectAreaByValue);

/**
 * Retrieves a list of all project areas.
 *
 * @route GET /project-areas
 * @returns {Array<Object>} A list of all project area objects.
 * @returns {500} If an internal server error occurs
 */
router.get("/project-areas", ProjectAreaController.getAllProjectAreas);

module.exports = router;