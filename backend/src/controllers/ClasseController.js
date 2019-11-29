const Classes = require("../models/Classes");

module.exports = {
  async index(req, res) {
    const classe = await Classes.findAll();

    return res.json(classe);
  },

  async show(req, res) {
    const { classe_id } = req.params;

    const classe = await Classes.findByPk(classe_id);
    if (!classe) {
      return res.status(404).json({ error: "Classe não encontrada" });
    }
  },

  async store(req, res) {
    const classe = await Classes.create(req.body);

    return res.json(classe);
  }
};
