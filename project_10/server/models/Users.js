const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Users = sequelize.define("Users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Users;
