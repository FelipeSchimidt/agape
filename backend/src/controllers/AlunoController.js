const Aluno = require("../models/Alunos");
const Parente = require("../models/Parentes");
//const Classe = require("../models/Classes");

module.exports = {
  async index(req, res) {
    const aluno = await Aluno.findAll();

    return res.json(aluno);
  },

  async show(req, res) {
    const { matricula } = req.params;
    const aluno = await Aluno.findAll({
      where: { matricula },
      include: [{ model: Parente, as: "parentes" }]
    });

    return res.json(aluno);
  },

  async store(req, res) {
    const [aluno, created] = await Aluno.findOrCreate({
      where: { ...req.body }
    });

    if (!created) {
      return res.status(404).json({ error: "Aluno não cadastrado" });
    }

    return res.json(aluno);
  },

  async update(req, res) {
    const { matricula } = req.params;

    const aluno = await Aluno.findOne({ matricula });

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado" });
    }
    await aluno.update(req.body);

    return res.json(aluno);
  },

  async delete(req, res) {
    const { matricula } = req.params;

    const aluno = await Aluno.findOne({ matricula });

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado" });
    }

    return res.json({ msg: "Cadastro de aluno deletado" });
  }
};
