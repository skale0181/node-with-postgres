const {User} = require('./userModel');
const {School} = require('./schoolModel');
const {sequelize} = require('../../config/dbconfig');

let db = {};

db.user = User;
db.school = School;
db.sequelize = sequelize;

db.user.hasMany(db.school);
db.school.belongsTo(db.user);

module.exports = db;