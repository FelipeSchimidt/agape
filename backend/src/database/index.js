const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Aluno = require("../models/Alunos");
const Parente = require("../models/Parentes");

const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Parente.init(connection);

module.exports = connection;
