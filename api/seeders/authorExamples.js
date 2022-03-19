"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: "Stephen King",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "André Aciman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frank Herbert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
