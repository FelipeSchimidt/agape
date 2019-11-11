const Aluno = require('../models/Alunos');
const Parente = require('../models/Parentes');
const Classe = require('../models/Classes');

module.exports = {
  async index(req, res) {
    const aluno = await Aluno.findAll();

    return res.json(aluno);
  },

  async show(req, res) {
    const { id } = req.params;
    const aluno = await Aluno.findByPk(id);

    return res.json(aluno);
  },

  async store(req, res) {
    const { parentes_cpf, classe_id } = req.params;
    const { cpf } = req.body;

    const parente = await Parente.findOne({ parentes_cpf });

    if (!parente) {
      return res.status(404).json({ error: 'Familiar não encontrado' });
    }

    const classe = await Classe.findByPk(classe_id);

    if (!classe) {
      return res.status(404).json({ error: 'Classe não cadastrada' });
    }

    const [aluno] = await Aluno.findOrCreate({
      where: { cpf, ...req.body }
    });

    await parente.addAlunos(aluno);
    await classe.addAlunos(aluno);

    return res.json(aluno);
  },

  async update(req, res) {
    const { id } = req.params;

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({ error: 'Aluno não encontrado' });
    }
    await aluno.update(req.body);

    return res.json(aluno);
  },

  async delete(req, res) {
    const { parentes_cpf, aluno_id } = req.params;

    const parente = await Parente.findOne({ parentes_cpf });

    if (!parente) {
      return res.status(404).json({ error: 'Familiar não encontrado' });
    }
    const aluno = await Aluno.findByPk(aluno_id);

    if (!aluno) {
      return res.status(400).json({ error: 'Aluno não encontrado' });
    }

    await parente.removeAluno(aluno);

    return res.json({ msg: 'Cadastro de aluno deletado' });
  }
};
