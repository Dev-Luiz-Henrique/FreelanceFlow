const { Freelancer } = require("../config/sqlContext");

const getAllFreelancers = async () => {
    return await Freelancer.findAll();
};

const createFreelancer = async ({ name, username, email, password, phone, state, birthDate }) => {
    const newFreelancer = await Freelancer.create({ name, username, email, password, phone, state, birthDate });
    return newFreelancer;
}

const updateFreelancer = async ({ name, username, email, password, phone, state, birthDate }) => {
    const freelancer = await freelancer.findByPk(id);
    if (!freelancer) throw new Error('Freelancer not found');

    await freelancer.update({ name, username, email, password, phone, state, birthDate });
    return await Freelancer.findByPk(id);
}

const deleteFreelancer = async (id) => {
    const freelancer = await Freelancer.findByPk(id);
    if (!freelancer) throw new Error('Freelancer not found');
    await freelancer.destroy();
}

const findFreelancerById = async (id) => {
    return await Freelancer.findByPk(id);
}

module.exports = {
    getAllFreelancers,
    createFreelancer,
    updateFreelancer,
    deleteFreelancer,
    findFreelancerById,
};