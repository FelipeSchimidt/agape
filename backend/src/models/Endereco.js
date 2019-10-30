const { Model, DataTypes } = require("sequelize");

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        bairro: DataTypes.STRING,
        endereco: DataTypes.STRING,
        numero: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Endereco;
