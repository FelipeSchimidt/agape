const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Aluno = require("../models/Alunos");
const Parente = require("../models/Parente");
const Telefone = require("../models/Telefone");
const Endereco = require("../models/Endereco");

const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Parente.init(connection);
Telefone.init(connection);
Endereco.init(connection);

//Familiar.associations(Aluno);

module.exports = connection;
