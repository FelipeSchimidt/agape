'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'parentes',
      'alunos_id',
      Sequelize.INTEGER,
      {
        allowNull: true,
        references: { model: 'alunos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    );
  },

  down: (queryInterface /* Sequelize */) => {
    return queryInterface.removeColumn('parentes', 'alunos_id');
  }
};
