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
      matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.BIGINT,
        allowNull: true,
        unique: true
      },
      rg: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      certidao_nascimento: {
        type: Sequelize.BIGINT,
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
