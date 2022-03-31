"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "IT",
          editor: "Suma",
          release_year: "1986-09-15",
          genre: "Terror",
          user_id: 1,
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Me chame pelo seu nome",
          editor: "Intrinseca",
          release_year: "2018-01-05",
          genre: "Romance",
          user_id: 1,
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Variações Enigma",
          editor: "Intrinseca",
          release_year: "2017-01-03",
          genre: "Romance",
          user_id: 3,
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Misery",
          editor: "Intrinseca",
          release_year: "1987-06-08",
          genre: "Suspense",
          user_id: 2,
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Duna",
          editor: "Aleph",
          release_year: "1965-06-01",
          genre: "Suspense",
          user_id: 4,
          author_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
