import { Model, DataTypes } from 'sequelize';

class Profile extends Model {
    static get attributes() {
        return {
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
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(255),
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
            profile_picture: {
                type: DataTypes.STRING(255),
            },
            linkedin: {
                type: DataTypes.STRING(100),
            },
            profile_type: {
                type: DataTypes.TINYINT,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        };
    }
}

export default Profile;