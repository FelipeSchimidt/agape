const Classes = require('../models/Classes');

module.exports = {
  async index(req, res) {
    const classe = await Classes.findAll();

    return res.json(classe);
  },

  async store(req, res) {
    const classe = await Classes.create(req.body);

    return res.json(classe);
  }
};
