'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serie: {
        allowNull: false,
        type: Sequelize.STRING
      },
      turma: {
        allowNull: false,
        type: Sequelize.STRING
      },
      turno: {
        allowNull: false,
        type: Sequelize.STRING
      },
      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface /* Sequelize */) => {
    return queryInterface.dropTable('classes');
  }
};
