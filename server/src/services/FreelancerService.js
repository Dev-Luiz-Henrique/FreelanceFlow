const { Freelancer } = require("../config/sqlContext");
const { Op } = require("sequelize");
const { ConflictError, NotFoundError } = require("../utils/errors/index");

//
// Validations
//
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