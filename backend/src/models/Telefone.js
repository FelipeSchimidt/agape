const { Model, DataTypes } = require("sequelize");

class Telefone extends Model {
  static init(sequelize) {
    super.init(
      {
        telefone: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Telefone;
