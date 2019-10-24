const { Model, DataTypes } = require("sequelize");

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        rg: DataTypes.STRING,
        cpf: DataTypes.STRING,
        nascimento: DataTypes.DATE
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Aluno;
