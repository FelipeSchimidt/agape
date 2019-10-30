"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("alunos", {
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
      rg: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      certidao_nascimento: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      observacao: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable("alunos");
  }
};
