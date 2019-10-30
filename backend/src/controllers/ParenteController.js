const Parente = require("../models/Parente");

module.exports = {
  async index(req, res) {
    const parente = await Parente.findAll();

    if (!parente) {
      return res.status(404).json({ error: "Parentes não encontrados" });
    }
    return res.json(parente);
  },

  async show(req, res) {
    const { id } = req.params;
    const parente = await Parente.findByPk(id);

    if (!parente) {
      return res.status(404).json({ error: "Parente não encontrado" });
    }

    return res.json(parente);
  },

  async create(req, res) {
    const parente = await Parente.create(req.body);

    return res.json(parente);
  }
};
