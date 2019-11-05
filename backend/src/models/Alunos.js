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
    this.belongsTo(models.Parentes, {
      foreignKey: 'id',
      as: 'alunos'
    });

    this.belongsToMany(models.Classes, {
      foreignKey: 'classe_id',
      through: 'classe-aluno',
      as: 'classes'
    });
  }
}

module.exports = Aluno;
