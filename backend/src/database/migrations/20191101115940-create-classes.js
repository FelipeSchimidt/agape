"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("classes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      serie: {
        type: Sequelize.STRING,
        allowNull: false
      },
      turma: {
        type: Sequelize.ENUM(["A", "B", "C"]),
        allowNull: true
      },
      turno: {
        type: Sequelize.ENUM(["MANHÃ", "TARDE"]),
        allowNull: true
      },
      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "professores", key: "id" },
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

  down: (queryInterface /* Sequelize */) => {
    return queryInterface.dropTable("classes");
  }
};
