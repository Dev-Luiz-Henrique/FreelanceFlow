const { Owner } = require("../config/sqlContext");
const { Op } = require("sequelize");

const getAllOwners = async () => {
    return await Owner.findAll();
};

const createOwner = async ({ name, username, email, password, phone, state, birthDate }) => {
    const existingOwner = await Owner.findOne({
        where: {
            [Op.or]: [ { email }, { phone }, { username } ]
        }
    });
    if (existingOwner) {
        let message = 'An account with this ';
        if (existingOwner.email === email) message += 'email ';
        if (existingOwner.phone === phone) message += 'phone ';
        if (existingOwner.username === username) message += 'username ';
        message += 'already exists.';
        throw new Error(message.trim());
    }

    const newOwner = await Owner.create({ name, username, email, password, phone, state, birthDate });
    return newOwner;
};

const updateOwner = async (id, { name, username, email, password, phone, state, birthDate }) => {
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
