const route = require("express").Router();
const AlunoController = require("./controllers/AlunoController");

route.get("/", AlunoController.store);

module.exports = route;
