const { Owner } = require("../config/sqlContext");

const getAllOwners = async () => {
    return await Owner.findAll();
};

const createOwner = async ({ name, username, email, password, phone, state, birthDate }) => {
    const newOwner = await Owner.create({ name, username, email, password, phone, state, birthDate });
    return newOwner;
};


const updateOwner = async ({ name, username, email, password, phone, state, birthDate }) => {
    const owner = await Owner.findByPk(id);
    if (!owner) throw new Error('Owner not found');

    await owner.update({ name, username, email, password, phone, state, birthDate });
    return await Owner.findByPk(id); // Retorna o objeto atualizado
};


const deleteOwner = async (id) => {
    const owner = await Owner.findByPk(id);
    if (!owner) throw new Error('Owner not found');
    await owner.destroy();
};


const findOwnerById = async (id) => {
    return await Owner.findByPk(id);
};

module.exports = {
    getAllOwners,
    createOwner,
    updateOwner,
    deleteOwner,
    findOwnerById,
};
