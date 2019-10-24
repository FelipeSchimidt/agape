const Aluno = require("../models/Alunos");

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

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado" });
    }
    await aluno.update(req.body);

    return res.json(aluno);
  },

  async delete(req, res) {
    const { id } = req.params;

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado" });
    }

    await aluno.destroy(aluno);

    return res.json({ msg: "Aluno deletado" });
  }
};
