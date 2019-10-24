const Aluno = require('../models/Alunos');

module.exports = {
  async index(req, res) {
    const aluno = await Aluno.findAll();

    return res.json(aluno);
  },
  async show(req, res) {
    const { id } = req.params;
    console.log(id);
    const aluno = await Aluno.findByPk(id);

    return res.json(aluno);
  },
  async store(req, res) {
    const aluno = await Aluno.create(req.body);

    return res.json(aluno);
  },
  async update(req, res) {
    const { id } = req.params;

    const aluno = await Aluno.set();
  }
};
