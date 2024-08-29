const FreelancerService = require('../services/FreelancerService');
const { NoContentError, ValidationError, NotFoundError } = require('../utils/errors');
const handleHttpError = require('../utils/httpErrorHandler');

const getAllFreelancers = async (req, res, next) => {
    try {
        const freelancers = await FreelancerService.getAllFreelancers();
        if (freelancers.length == 0) 
            throw new NoContentError("No freelancers found");
        res.status(200).json(freelancers);
    }
    catch (error) {
        console.error("Error fetching all freelancers:");
        handleHttpError(res, error);
    }
};

const createFreelancer = async (req, res, next) => {
    try {
        const { name, username, email, password, phone, state, birthDate } = req.body; 
        if (!name || !username || !email || !password || !phone || !state || !birthDate)
            throw new ValidationError("All fields are required");

        const newFreelancer = await FreelancerService.createFreelancer({ 
            name, username, email, password, phone, state, birthDate
        });
        res.status(201).json(newFreelancer);
    } catch (error) {
        console.error("Error creating freelancer:");
        handleHttpError(res, error);
    }
}

const updateFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new ValidationError("ID is required");
          
        const { name, username, email, password, phone, state, birthDate } = req.body;
        if (!name && !username && !email && !password && !phone && !state && !birthDate) 
            throw new ValidationError("At least one field is required");

        const updatedFreelancer = await FreelancerService.updateFreelancer( id, { 
            name, username, email, password, phone, state, birthDate 
        });
        res.status(200).json({
            statusCode: 200,
            message: "Freelancer updated successfully",
            data: updatedFreelancer,
        });
    } catch (error) {
        console.error("Error updating freelancer:");
        handleHttpError(res, error);
    }
}

const deleteFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new ValidationError("ID is required");

        await FreelancerService.deleteFreelancer(id);
        res.status(200).json({
            statusCode: 200,
            message: "Freelancer deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting freelancer:");
        handleHttpError(res, error);
    }
}

const getFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) throw new ValidationError("ID is required");

        const freelancer = await FreelancerService.findFreelancerById(id);
        if (!freelancer) throw new NotFoundError("Freelancer not found");

        res.status(200).json(freelancer);
    } catch (error) {
        console.error("Error fetching freelancer by ID:");
        handleHttpError(res, error);
    }
}

module.exports = {
    getAllFreelancers,
    createFreelancer,
    updateFreelancerById,
    deleteFreelancerById,
    getFreelancerById,
}
