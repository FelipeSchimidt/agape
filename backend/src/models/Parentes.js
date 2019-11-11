const { Model, DataTypes } = require('sequelize');

class Parente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.BIGINT,
        rg: DataTypes.BIGINT,
        nascimento: DataTypes.DATEONLY,
        tipo: DataTypes.ENUM({
          values: ['pai', 'mãe', 'avos', 'tios', 'primos']
        }),
        responsavel_financeiro: DataTypes.BOOLEAN,
        telefone: DataTypes.INTEGER,
        endereco: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Aluno, {
      foreignKey: 'parentes_id',
      through: 'alunosParentes',
      as: 'alunos'
    });
  }
}

module.exports = Parente;
