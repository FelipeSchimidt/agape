"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("parentes", {
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
        allowNull: true
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
          values: ["pai", "mãe", "avos", "tios", "primos"]
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
    return queryInterface.dropTable("parentes");
  }
};
