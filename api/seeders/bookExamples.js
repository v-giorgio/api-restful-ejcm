"use strict";

const BookAPIController = require("../utils/BookAPIController");

module.exports = {
  async up(queryInterface, Sequelize) {
    const bookArr = [];
    for (let i = 0; i < 5; i++) {
      bookArr.push(await BookAPIController.getBooks(i));
    }
    await queryInterface.bulkInsert("Books", bookArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
