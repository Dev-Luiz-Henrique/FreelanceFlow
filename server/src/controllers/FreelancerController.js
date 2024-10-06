import FreelancerService from '../services/FreelancerService.js';
import { NoContentError, ValidationError, NotFoundError } from '../utils/errors/index.js';
import handleHttpError from '../middlewares/httpErrorHandler.js';

const getAllFreelancers = async (req, res, next) => {
    try {
        const freelancers = await FreelancerService.getAllFreelancers();
        if (freelancers.length == 0) 
            throw new NoContentError("No freelancers found");
        res.status(200).json(freelancers);
    }
    catch (error) {
        handleHttpError(error, req, res);
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
        handleHttpError(error, req, res);
    }
}

const updateFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, username, email, password, phone, state, birthDate } = req.body;
        if (!name && !username && !email && !password && !phone && !state && !birthDate) 
            throw new ValidationError("At least one field is required");

        const updatedFreelancer = await FreelancerService.updateFreelancer( id, { 
            name, username, email, password, phone, state, birthDate 
        }); 
        res.status(200).json(updatedFreelancer);
    } catch (error) {
        handleHttpError(error, req, res);
    }
}

const deleteFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        await FreelancerService.deleteFreelancer(id);
        res.status(204).send();
    } catch (error) {
        handleHttpError(error, req, res);
    }
}

const getFreelancerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const freelancer = await FreelancerService.findFreelancerById(id);
        if (!freelancer) throw new NotFoundError("Freelancer not found");
        res.status(200).json(freelancer);
    } catch (error) {
        handleHttpError(error, req, res);
    }
}

export {
    getAllFreelancers,
    createFreelancer,
    updateFreelancerById,
    deleteFreelancerById,
    getFreelancerById,
};