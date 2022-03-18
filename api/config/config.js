require("dotenv").config();

module.exports = {
  dialect: process.env.DB_DIALECT || "sqlite",
  database: process.env.DB_DATABASE,
  storage: process.env.DB_STORAGE,
};
