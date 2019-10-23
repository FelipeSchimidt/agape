const Aluno = require("../models/Alunos");

module.exports = {
  async store(req, res) {
    const { nome, rg, cpf, nascimento } = req.body;

    const aluno = await Aluno.create({ nome, rg, cpf, nascimento });

    return res.json(aluno);
  }
};
