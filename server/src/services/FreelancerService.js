const { Freelancer } = require("../config/sqlContext");
const { ProfileValidator, DatabaseChecker } = require("../utils/validations");

async function validateFreelancerData({ email, phone, password, birthDate, username }) {
    ProfileValidator.validateEmailFormat(email);
    ProfileValidator.validatePhoneFormat(phone);
    ProfileValidator.validatePasswordStrength(password);
    ProfileValidator.validateBirthDate(birthDate);
    
    await DatabaseChecker.checkUniqueFields(Freelancer, [
        { name: 'email', value: email },
        { name: 'username', value: username }
    ]);
}

const getAllFreelancers = async () => {
    return await Freelancer.findAll();
};

const createFreelancer = async ({ name, username, email, password, phone, state, birthDate }) => {
    await validateFreelancerData({ email, phone, password, birthDate, username });

    const newFreelancer = await Freelancer.create({ name, username, email, password, phone, state, birthDate });
    return newFreelancer;
};

const updateFreelancer = async (id, { name, username, email, password, phone, state, birthDate }) => {
    const freelancer = await DatabaseChecker.checkExists(Freelancer, id, 'Freelancer not found');

    const uniqueFields = [];
    if (email) uniqueFields.push({ name: 'email', value: email });
    if (username) uniqueFields.push({ name: 'username', value: username });
    if (uniqueFields.length > 0) 
        await DatabaseChecker.checkUniqueFields(Freelancer, uniqueFields);

    await freelancer.update({ name, username, email, password, phone, state, birthDate });
    return await Freelancer.findByPk(id); // Return the updated object
};

const deleteFreelancer = async (id) => {
    const freelancer = await DatabaseChecker.checkExists(Freelancer, id, 'Freelancer not found');
    await freelancer.destroy();
};

const findFreelancerById = async (id) => {
    return await DatabaseChecker.checkExists(Freelancer, id, 'Freelancer not found');
};

module.exports = {
    getAllFreelancers,
    createFreelancer,
    updateFreelancer,
    deleteFreelancer,
    findFreelancerById,
};