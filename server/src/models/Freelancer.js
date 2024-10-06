import Profile from './Profile.js';

class Freelancer extends Profile {
    static init(sequelize) {
        super.init(this.attributes, {
            sequelize,
            tableName: 'Freelancers',
            freezeTableName: true,
            timestamps: false,
        });
    }

    static get attributes() {
        return {
            ...super.attributes,
            // Additional freelancer-specific attributes can be added here
        };
    }
}

export default Freelancer;