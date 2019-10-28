'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Parentes',
      [
        /* {
          mae: 'Maria Clara',
          cpfMae: 85999634566,
          pai: 'João Silva',
          createdAt: new Date(),
          updatedAt: new Date()
        }, */
        {
          mae: 'Valquiria Aparecida Vieira dos Santos',
          cpfMae: 90279638865,
          pai: 'Alfredo dos Santos',
          cpfPai: 65188866453,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Parentes', null, {});
  }
};
