const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Aluno = require('../models/Alunos');
const Familiar = require('../models/Familiar');

const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Familiar.init(connection);

Familiar.associations(Aluno);

module.exports = connection;
