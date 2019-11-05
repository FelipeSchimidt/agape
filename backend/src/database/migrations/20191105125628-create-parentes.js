'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parentes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      rg: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM({
          values: ['pai', 'mãe', 'avos', 'tios', 'primos']
        }),
        allowNull: false
      },
      responsavel_financeiro: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      telefone: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface /* Sequelize */) => {
    return queryInterface.dropTable('parentes');
  }
};
