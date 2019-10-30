const { Model, DataTypes } = require("sequelize");

class Parente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.BIGINT,
        rg: DataTypes.BIGINT,
        nascimento: DataTypes.DATEONLY,
        tipo: DataTypes.ENUM({
          values: ["pai", "mãe", "avos", "tios", "primos"]
        }),
        responsavelFinanceiro: DataTypes.BOOLEAN,
        telefone_id: DataTypes.INTEGER,
        endereco_id: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Parente;
