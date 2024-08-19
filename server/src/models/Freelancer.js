const Profile = require('./Profile');
const ProfileType = require('../enums/ProfileType');

const Freelancer = Profile.scope('freelancer').init({
    // Freelancer specific fields (If needed)
}, {
    sequelize: Profile.sequelize,
    modelName: 'Freelancer',
    defaultScope: {
        where: {
            profileType: ProfileType.FREELANCER
        }
    }
});

module.exports = Freelancer;