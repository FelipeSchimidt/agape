"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "parentes",
      "endereco_id",
      Sequelize.INTEGER,
      {
        allowNull: false,
        references: { model: "enderecos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    );
  },

  down: (queryInterface /* Sequelize */) => {
    return queryInterface.removeColumn("parentes", "telefone_id");
  }
};
