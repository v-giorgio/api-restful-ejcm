"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Vitor",
          email: "vitor@hp.com.br",
          hash: "teste123",
          salt: "teste345",
          birthdate: "1980-08-20",
          street: "Rua dos Alfeneiros",
          neighborhood: "Alfeneiro",
          street_number: 895,
          zipcode: 40890300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laura",
          email: "laura@hp.com.br",
          hash: "teste123",
          salt: "teste345",
          birthdate: "1986-04-24",
          street: "Rua dos Parisienses",
          neighborhood: "Parisiense",
          street_number: 896,
          zipcode: 40890301,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jorge",
          email: "jorge@hp.com.br",
          hash: "teste123",
          salt: "teste345",
          birthdate: "2005-08-20",
          street: "Rua dos Canais",
          neighborhood: "Canais",
          street_number: 897,
          zipcode: 40890302,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "André",
          email: "andre@hp.com.br",
          hash: "teste123",
          salt: "teste345",
          birthdate: "1994-10-11",
          street: "Rua dos Museus",
          neighborhood: "Museu",
          street_number: 898,
          zipcode: 40890303,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Loras",
          email: "loras@hp.com.br",
          hash: "teste123",
          salt: "teste345",
          birthdate: "1980-08-25",
          street: "Rua dos Quadros",
          neighborhood: "Quadros",
          street_number: 899,
          zipcode: 40890304,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
