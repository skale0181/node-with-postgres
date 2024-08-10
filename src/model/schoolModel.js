const {sequelize, DataTypes} = require('../../config/dbconfig');

const School = sequelize.define('school', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
});

module.exports = { School };