const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        rg: DataTypes.STRING,
        cpf: DataTypes.STRING,
        nascimento: DataTypes.DATE,
        certidao_nascimento: DataTypes.INTEGER,
        observacao: DataTypes.TEXT,
        parentes_cpf: DataTypes.BIGINT
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Parente, {
      foreignKey: 'parentes_id',
      through: 'alunos-parentes',
      as: 'parentes'
    });

    this.belongsToMany(models.Classe, {
      foreignKey: 'classe_id',
      through: 'classe-aluno',
      as: 'classes'
    });
  }
}

module.exports = Aluno;
