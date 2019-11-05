const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.BIGINT,
        telefone: DataTypes.BIGINT,
        endereco: DataTypes.STRING
      },
      {
        sequelize,
        tableName: 'professor'
      }
    );
  }

  static associate(/* models */) {}
}

module.exports = Professor;
