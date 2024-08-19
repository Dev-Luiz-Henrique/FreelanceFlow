const OwnerService = require("../services/OwnerService");

function handleError(res, error, statusCode = 500) {
    const errorResponse = {
        statusCode,
        error: "Something went wrong",
    };

    if(process.env.NODE_ENV === "development")
        errorResponse.details = error.message;
    res.status(statusCode).json(errorResponse);
}

const getAllOwners = async (req, res, next) => {
    try {
        const owners = await OwnerService.getAllOwners();
        if (!owners || owners.length === 0) {
            return res.status(204).json({
                statusCode: 204,
                message: "No owners found",
            });
        }

        res.status(200).json(owners);
    } catch (error) {
        console.error("Error fetching owners:", error);
        handleError(res, error);
    }
};

const createOwner = async (req, res, next) => {
    try {
        const { name, username, email, password, phone, state, birthDate } = req.body;
        if (!name || !username || !email || !password || !phone || !state || !birthDate) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "All fields are required.",
            });
        }

        const newOwner = await OwnerService.createOwner({
            name, username, email, password, phone, state, birthDate
        });

        res.status(201).json({
            statusCode: 201,
            message: "Owner created successfully",
            data: newOwner,
        });
    } catch (error) {
        console.error("Error creating owner:", error);
        handleError(res, error);
    }
};

const updateOwnerById = async (req, res, next) => {
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
                message: "At least one field is required to update.",
            });
        }

        const existingOwner = await OwnerService.findOwnerById(id);
        if (!existingOwner) {
            return res.status(404).json({
                statusCode: 404,
                error: "Not Found",
                message: "Owner not found.",
            });
        }

        const updatedOwner = await OwnerService.updateOwner(id, { 
            name, username, email, password, phone, state, birthDate
        });
        res.status(200).json({
            statusCode: 200,
            message: "Owner updated successfully",
            data: updatedOwner,
        });
    } catch (error) {
        console.error("Error updating owner:", error);
        handleError(res, error);
    }
};

const deleteOwnerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "ID is required.",
            });
        }

        const existingOwner = await OwnerService.findOwnerById(id);
        if (!existingOwner) {
            return res.status(404).json({
                statusCode: 404,
                error: "Not Found",
                message: "Owner not found.",
            });
        }

        await OwnerService.deleteOwner(id);
        res.status(204).json();
    } catch (error) {
        console.error("Error deleting owner by ID:", error);
        handleError(res, error);
    }
};

const getOwnerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                statusCode: 400,
                error: "Bad Request",
                message: "ID is required.",
            });
        }

        const owner = await OwnerService.findOwnerById(id);
        if (!owner) {
            return res.status(404).json({
                statusCode: 404,
                error: "Not Found",
                message: "Owner not found.",
            });
        }

        res.status(200).json(owner);
    } catch (error) {
        console.error("Error fetching owner by ID:", error);
        handleError(res, error);
    }
};

module.exports = {
    getAllOwners,
    createOwner,
    updateOwnerById,
    deleteOwnerById,
    getOwnerById,
};