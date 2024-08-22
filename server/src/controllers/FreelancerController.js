const FreelancerService = require('../services/FreelancerService');

const getAllFreelancers = async (req, res, next) => {
    try {
        const freelancers = await FreelancerService.getAllFreelancers();
        if (freelancers.length == 0) {
            return res.status(204).json({
                statusCode: 204,
                message: "No freelancers found",
            });
        }
        res.status(200).json(freelancers);
    }
    catch (error) {
        console.error("Error fetching all freelancers:", error);
        handleError(res, error);
    }
};

const createFreelancer = async (req, res, next) => {
    try {
        const { name, username, email, password, phone, state, birthDate } = req.body;
        if (!name || !username || !email || !password || !phone || !state || !birthDate) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "All fields are required.",
            });
        }

        const newFreelancer = await FreelancerService.createFreelancer({ name, username, email, password, phone, state, birthDate });
        res.status(201).json(newFreelancer);
    } catch (error) {
        console.error("Error creating freelancer:", error);
        handleError(res, error);
    }
}

const updateFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "ID is required.",
            });
        }
        
        const { name, username, email, password, phone, state, birthDate } = req.body;
        if (!name && !username && !email && !password && !phone && !state && !birthDate) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "At least one field is required.",
            });
        }

        const updatedFreelancer = await FreelancerService.updateFreelancer({ 
            id, name, username, email, password, phone, state, birthDate 
        });
        res.status(200).json({
            statusCode: 200,
            message: "Freelancer updated successfully",
            data: updatedFreelancer,
        });
    } catch (error) {
        console.error("Error updating freelancer:", error);
        handleError(res, error);
    }
}

const deleteFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "ID is required.",
            });
        }

        await FreelancerService.deleteFreelancer(id);
        res.status(200).json({
            statusCode: 200,
            message: "Freelancer deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting freelancer:", error);
        handleError(res, error);
    }
}

const getFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "ID is required.",
            });
        }

        const freelancer = await FreelancerService.findFreelancerById(id);
        if (!freelancer) {
            return res.status(404).json({
                statusCode: 404,
                error: "Not Found",
                message: "Freelancer not found.",
            });
        }
        res.status(200).json(freelancer);
    } catch (error) {
        console.error("Error fetching freelancer by ID:", error);
        handleError(res, error);
    }
}

module.exports = {
    getAllFreelancers,
    createFreelancer,
    updateFreelancerById,
    deleteFreelancerById,
    getFreelancerById,
}
