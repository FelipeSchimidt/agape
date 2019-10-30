"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("aluno-parente", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "alunos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      familiar_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "parentes", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("aluno-parente");
  }
};
