const dbconfig = require('../../servers/db.js');

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD,{
    host: dbconfig.HOST,
    operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.upload = require("./upload.model.js");

module.exports = db;