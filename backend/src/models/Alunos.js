const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        rg: DataTypes.BIGINT,
        cpf: DataTypes.BIGINT,
        nascimento: DataTypes.DATE,
        certidao_nascimento: DataTypes.BIGINT,
        observacao: DataTypes.TEXT
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Classe, {
      foreignKey: 'aluno_id',
      through: 'classesAlunos',
      as: 'classes'
    });

    this.belongsToMany(models.Parente, {
      foreignKey: 'alunos_id',
      through: 'alunosParentes',
      as: 'parentes'
    });
  }
}

module.exports = Aluno;
