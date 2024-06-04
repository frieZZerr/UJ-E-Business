const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './DB.sqlite',
  define: {
    timestamps: false,
  }
});

module.exports = sequelize;
