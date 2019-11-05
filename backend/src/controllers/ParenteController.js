const Parente = require('../models/Parentes');
//const Aluno = require('../models/Alunos');

module.exports = {
  async index(req, res) {
    const parente = await Parente.findAll();

    if (!parente) {
      return res.status(404).json({ error: 'Parentes não encontrados' });
    }
    return res.json(parente);
  },

  async show(req, res) {
    const { cpf } = req.params;
    const parente = await Parente.findOne({ cpf });

    if (!parente) {
      return res.status(404).json({ error: 'Parente não encontrado' });
    }

    return res.json(parente);
  },

  async store(req, res) {
    const parente = await Parente.create(req.body);

    return res.json(parente);
  },

  async update(req, res) {
    const { cpf } = req.params;

    const parente = await Parente.findOne({ cpf });

    if (!parente) {
      return res.status(404).json({ error: 'Parente não encontrado' });
    }

    parente.update(req.body);

    return res.json(parente);
  },

  async delete(req, res) {
    const { cpf } = req.params;

    const parente = await Parente.findOne({ cpf });

    if (!parente) {
      return res.status(404).json({ error: 'Parente não encontrado' });
    }

    parente.destroy();
  }
};
