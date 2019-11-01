"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("telefones", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM({
          values: ["celular", "residencial", "trabalho"]
        }),
        allowNull: false
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
    return queryInterface.dropTable("telefones");
  }
};
