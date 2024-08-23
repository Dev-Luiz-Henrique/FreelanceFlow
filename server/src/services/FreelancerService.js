const { Freelancer } = require("../config/sqlContext");
const { Op } = require("sequelize");

const getAllFreelancers = async () => {
    return await Freelancer.findAll();
};

const createFreelancer = async ({ name, username, email, password, phone, state, birthDate }) => {
    const existingFreelancer = await Freelancer.findOne({
        where: {
            [Op.or]: [ { email }, { phone }, { username } ]
        }
    });
    if (existingFreelancer) {
        let message = 'An account with this ';
        if (existingFreelancer.email === email) message += 'email ';
        if (existingFreelancer.phone === phone) message += 'phone ';
        if (existingFreelancer.username === username) message += 'username ';
        message += 'already exists.';
        throw new Error(message.trim());
    }

    const newFreelancer = await Freelancer.create({ name, username, email, password, phone, state, birthDate });
    return newFreelancer;
};

const updateFreelancer = async ( id, { name, username, email, password, phone, state, birthDate }) => {
    const freelancer = await Freelancer.findByPk(id);
    if (!freelancer) throw new Error('Freelancer not found');

    await freelancer.update({ name, username, email, password, phone, state, birthDate });
    return await Freelancer.findByPk(id); // Retorna o objeto atualizado
};

const deleteFreelancer = async (id) => {
    const freelancer = await Freelancer.findByPk(id);
    if (!freelancer) throw new Error('Freelancer not found');
    await freelancer.destroy();
};

const findFreelancerById = async (id) => {
    return await Freelancer.findByPk(id);
};

module.exports = {
    getAllFreelancers,
    createFreelancer,
    updateFreelancer,
    deleteFreelancer,
    findFreelancerById,
};