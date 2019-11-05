const { Model, DataTypes } = require('sequelize');

class Classe extends Model {
  static init(sequelize) {
    super.init(
      {
        serie: DataTypes.STRING,
        turma: DataTypes.STRING,
        turno: DataTypes.STRING,
        professor_id: DataTypes.INTEGER
      },
      {
        sequelize,
        tableName: 'classes'
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Aluno, {
      foreignKey: 'aluno_id',
      through: 'classe-aluno',
      as: 'alunos'
    });
  }
}

module.exports = Classe;
