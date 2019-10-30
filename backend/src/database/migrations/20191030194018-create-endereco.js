"use strict";

const ESTADOS = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO"
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("enderecos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      estado: {
        type: Sequelize.ENUM(ESTADOS),
        allowNull: false,
        default: "PA"
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
        default: "Belém"
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("enderecos");
  }
};
