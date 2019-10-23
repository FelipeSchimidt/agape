const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Aluno = require("../models/Alunos");

const connection = new Sequelize(dbConfig);

Aluno.init(connection);

module.exports = connection;
