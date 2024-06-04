const sequelize = require('../config/database');
const Comments = require('./Comments');
const Posts = require('./Posts');
const Users = require('./Users');

const initDb = async () => {
  await sequelize.sync();
};

module.exports = { initDb, Comments, Posts, Users };
