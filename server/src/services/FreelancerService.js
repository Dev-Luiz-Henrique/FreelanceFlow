const { Freelancer } = require("../config/sqlContext");
const { Op } = require("sequelize");
const { ConflictError, NotFoundError, ValidationError } = require("../utils/errors/index");

//
// Validations
//

async function validateFreelancerData({ email, phone, password, birthDate }) {
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
    const existingFreelancer = await Freelancer.findOne({
        where: {
            [Op.or]: [ { email }, { username } ]
        }
    });
    
    if (existingFreelancer) {
        const conflictingFields = [];
        if (existingFreelancer.email === email) conflictingFields.push('email');
        if (existingFreelancer.username === username) conflictingFields.push('username');
    
        const message = `An account with this ${conflictingFields.join(' and ')} already exists.`;
        throw new ConflictError(message.trim());
    }
}

async function validateFreelancerExists(id) {
    const freelancer = await Freelancer.findByPk(id);
    if (!freelancer) throw new NotFoundError('Freelancer not found');
    return freelancer;
}

//
// Services
//

const getAllFreelancers = async () => {
    return await Freelancer.findAll();
};

const createFreelancer = async ({ name, username, email, password, phone, state, birthDate }) => {
    await validateFreelancerData({ email, phone, password, birthDate });
    await verifyUniqueFields(email, username);

    const newFreelancer = await Freelancer.create({ name, username, email, password, phone, state, birthDate });
    return newFreelancer;
};

const updateFreelancer = async ( id, { name, username, email, password, phone, state, birthDate }) => {
    const freelancer = await validateFreelancerExists(id);
    await verifyUniqueFields(email, username);

    await freelancer.update({ name, username, email, password, phone, state, birthDate });
    return await Freelancer.findByPk(id); // Retorna o objeto atualizado
};

const deleteFreelancer = async (id) => {
    const freelancer = await validateFreelancerExists(id);
    await freelancer.destroy();
};

const findFreelancerById = async (id) => {
    return await validateFreelancerExists(id);
};

module.exports = {
    getAllFreelancers,
    createFreelancer,
    updateFreelancer,
    deleteFreelancer,
    findFreelancerById,
};