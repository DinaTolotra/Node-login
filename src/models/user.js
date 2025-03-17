const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define(
        'User',
        {
            name: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }
    )
    return User;
};
