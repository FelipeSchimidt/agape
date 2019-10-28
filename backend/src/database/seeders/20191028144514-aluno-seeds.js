"use strict";

module.exports = {
  up: (queryInterface /* Sequelize */) => {
    return queryInterface.bulkInsert("Alunos", [
      {
        nome: "Maria Joaquina",
        rg: "1235468",
        cpf: "123123321",
        nascimento: "2005-10-10",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface /* Sequelize */) => {
    return queryInterface.bulkDelete("Alunos", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
