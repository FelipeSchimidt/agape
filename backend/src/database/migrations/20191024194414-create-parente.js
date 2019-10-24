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
      mae: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpfMae: {
        type: Sequelize.BIGINT(11),
        allowNull: false
      },
      pai: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cpfPai: {
        type: Sequelize.BIGINT(11),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("parentes");
  }
};
