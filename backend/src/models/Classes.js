const { Model, DataTypes } = require("sequelize");

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
        tableName: "classes"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Professor, {
      foreignKey: "professor_id",
      as: "professor"
    });
    this.belongsToMany(models.Aluno, {
      foreignKey: "classe_id",
      through: "classesAlunos",
      as: "alunos"
    });
  }
}

module.exports = Classe;
