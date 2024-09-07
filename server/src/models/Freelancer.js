const { DataTypes } = require('sequelize');

const freelancerAttributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone: {
        type: DataTypes.CHAR(11),
        allowNull: false,
    },
    state: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING(300),
    },
    profile_Picture: {
        type: DataTypes.STRING(255),
    },
    linkedIn: {
        type: DataTypes.STRING(100),
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};

function freelancerModel(sequelize) {
    return sequelize.define('Freelancer', freelancerAttributes, {
        freezeTableName: true,
        timestamps: false,
    });
}

module.exports = {
    freelancerModel,
    freelancerAttributes
};