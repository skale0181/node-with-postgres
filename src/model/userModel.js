const {sequelize, DataTypes} = require('../../config/dbconfig');

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

module.exports = { User };