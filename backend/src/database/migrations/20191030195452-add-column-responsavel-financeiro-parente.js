"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "parentes",
      "responsavel-financeiro",
      Sequelize.BOOLEAN,
      {
        allowNull: false,
        default: true
      }
    );
  },

  down: (queryInterface /* Sequelize */) => {
    return queryInterface.removeColumn("parentes", "responsavel-financeiro");
  }
};
