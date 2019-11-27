const Professor = require("../models/Professor");

module.exports = {
  async index(req, res) {
    const professor = await Professor.findAll();

    return res.json(professor);
  },

  async store(req, res) {
    const professor = await Professor.create(req.body);

    return res.json(professor);
  },

  async update(req, res) {
    const { id } = req.params;
    const professor = await Professor.findByPk(id);

    if (!professor) {
      return res.status(404).json({ error: "Cadastro não encontrado" });
    }

    await professor.update(req.body);

    return res.status(200).json({ msg: "Cadastro atualizado com sucesso" });
  },

  async delete(req, res) {
    const { id } = req.params;
    const professor = await Professor.findByPk(id);

    if (!professor) {
      return res.status(404).json({ msg: "Cadastro não encontrado" });
    }

    await professor.destroy();

    return res.json({ msg: "Cadastro deletado com sucesso" });
  }
};
