const Sequelize = require("sequelize");
const config = require("../config/config");

// import models

const dbConnection = new Sequelize(config);

// init models

module.exports = dbConnection;
