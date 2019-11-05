const Aluno = require('../models/Alunos');
const Parente = require('../models/Parentes');

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
    const { parentes_cpf } = req.params;
    /* const {
      nome,
      rg,
      cpf,
      certidao_nascimento,
      nascimento,
      observacao,
      parentes_cpf
    } = req.body; */

    const parente = await Parente.findOne({ parentes_cpf });

    if (!parente) {
      return res.status(404).json({ error: 'Familiar não encontrado' });
    }
    //const parentes_cpf = parente_cpf;
    const aluno = await Aluno.create(req.body);

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
    const { id } = req.params;

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({ error: 'Aluno não encontrado' });
    }

    await aluno.destroy(aluno);

    return res.json({ msg: 'Aluno deletado' });
  }
};
