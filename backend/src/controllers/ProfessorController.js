const Professor = require('../models/Professor');

module.exports = {
  async index(req, res) {
    const professor = await Professor.findAll();

    return res.json(professor);
  },

  async store(req, res) {
    const professor = await Professor.create(req.body);

    return res.json(professor);
  }
};
