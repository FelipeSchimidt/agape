const Classes = require("../models/Classes");

module.exports = {
  async index(req, res) {
    const classe = await Classes.findAll({
      include: {
        association: "professor"
      }
    });

    return res.json(classe);
  },

  async show(req, res) {
    const { classe_id } = req.params;

    const classe = await Classes.findByPk(classe_id);
    if (!classe) {
      return res.status(404).json({ error: "Classe não encontrada" });
    }

    return res.status(200).json(classe);
  },

  async store(req, res) {
    const classe = await Classes.create(req.body);

    return res.json(classe);
  },

  async update(req, res) {
    const { id } = req.params;

    const classe = await Classes.findByPk(id);
    if (!classe) {
      return res.status(404).json({ error: "Classe não encontrada" });
    }

    await classe.update(req.body);

    return res.status(200).json(classe);
  },

  async delete(req, res) {
    const { id } = req.params;

    const classe = await Classes.findByPk(id);
    if (!classe) {
      return res.status(404).json({ error: "Classe não encontrada" });
    }
    await classe.destroy();
  }
};
