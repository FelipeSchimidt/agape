const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Aluno = require('../models/Alunos');
const Parente = require('../models/Parentes');
const Professor = require('../models/Professor');
const Classe = require('../models/Classes');
/* const Telefone = require("../models/Telefone");
const Endereco = require("../models/Endereco"); */

const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Parente.init(connection);
Professor.init(connection);
Classe.init(connection);

Aluno.associate(connection.models);
Parente.associate(connection.models);
Classe.associate(connection.models);
Professor.associate(connection.models);

module.exports = connection;
