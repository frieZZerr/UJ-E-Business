const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Posts = sequelize.define("Posts", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
        onDelete: "cascade",
    });
};

module.exports = Posts;
