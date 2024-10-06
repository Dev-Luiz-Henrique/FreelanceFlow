import Profile from './Profile.js';

class Owner extends Profile {
    static init(sequelize) {
        return super.init(this.attributes, {
            sequelize,
            tableName: 'Owners',
            freezeTableName: true,
            timestamps: false,
        });
    }

    static get attributes() {
        return {
            ...super.attributes,
            // Additional owner-specific attributes can be added here
        };
    }
}

export default Owner;