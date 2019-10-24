const { Model, DataTypes } = require("sequelize");

class Parente extends Model {
  static init(sequelize) {
    super.init(
      {
        mae: DataTypes.STRING,
        cpfMae: DataTypes.BIGINT,
        pai: DataTypes.STRING,
        cpfPai: DataTypes.BIGINT
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Parente;
