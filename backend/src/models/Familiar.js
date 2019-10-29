const { Model, DataTypes } = require('sequelize');

class Familiar extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.BIGINT,
        rg: DataTypes.BIGINT,
        nascimento: DataTypes.DATEONLY,
        tipo: DataTypes.ENUM,
        alunos_id: DataTypes.ARRAY
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Familiar;
