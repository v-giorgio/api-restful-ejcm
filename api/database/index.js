const Sequelize = require("sequelize");
const config = require("../config/config");

const Users = require("../models/Users");
const Books = require("../models/Books");

const dbConnection = new Sequelize(config);

Users.init(dbConnection);
Books.init(dbConnection);

module.exports = dbConnection;
