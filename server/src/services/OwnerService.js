import { Owner } from "../config/sqlContext.js";
import { Op } from "sequelize";
import { ConflictError, NotFoundError, ValidationError } from "../utils/errors/index.js";

// Validations

async function validateOwnerData({ email, phone, password, birthDate }) {
    if (!validateEmailFormat(email)) throw new ValidationError('Invalid email format');
    if (!validatePhoneFormat(phone)) throw new ValidationError('Invalid phone format');
    if (!validatePasswordStrength(password)) throw new ValidationError('Password does not meet security requirements');
    if (!validateBirthDate(birthDate)) throw new ValidationError('Invalid birth date or age below the required minimum');
}

function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneFormat(phone) {
    const phoneRegex = /^\d{10,15}$/; // Exemplo simples, ajustar conforme necessário
    return phoneRegex.test(phone);
}

function validatePasswordStrength(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[!@#$%^&*]/.test(password);
}

function validateBirthDate(birthDate) {
    const date = new Date(birthDate);
    const age = new Date().getFullYear() - date.getFullYear();
    return !isNaN(date.getTime()) && age >= 18;
}

async function verifyUniqueFields(email, username) {
    const existingOwner = await Owner.findOne({
        where: {
            [Op.or]: [{ email }, { username }]
        }
    });

    if (existingOwner) {
        const conflictingFields = [];
        if (existingOwner.email === email) conflictingFields.push('email');
        if (existingOwner.username === username) conflictingFields.push('username');

        const message = `An account with this ${conflictingFields.join(' and ')} already exists.`;
        throw new ConflictError(message.trim());
    }
}

async function validateOwnerExists(id) {
    const owner = await Owner.findByPk(id);
    if (!owner) throw new NotFoundError('Owner not found');
    return owner;
}

// Services

const getAllOwners = async () => {
    return await Owner.findAll();
};

const createOwner = async ({ name, username, email, password, phone, state, birthDate }) => {
    await validateOwnerData({ email, phone, password, birthDate });
    await verifyUniqueFields(email, username);

    const newOwner = await Owner.create({ name, username, email, password, phone, state, birthDate });
    return newOwner;
};

const updateOwner = async (id, { name, username, email, password, phone, state, birthDate }) => {
    const owner = await validateOwnerExists(id);
    await verifyUniqueFields(email, username);

    await owner.update({ name, username, email, password, phone, state, birthDate });
    return await Owner.findByPk(id); // Retorna o objeto atualizado
};

const deleteOwner = async (id) => {
    const owner = await validateOwnerExists(id);
    await owner.destroy();
};

const findOwnerById = async (id) => {
    return await validateOwnerExists(id);
};

export {
    getAllOwners,
    createOwner,
    updateOwner,
    deleteOwner,
    findOwnerById,
};