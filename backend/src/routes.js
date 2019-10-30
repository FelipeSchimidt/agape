const route = require("express").Router();
const AlunoController = require("./controllers/AlunoController");
const ParenteController = require("./controllers/ParenteController");

route.get("/aluno", AlunoController.index);
route.get("/aluno/:id", AlunoController.show);
route.post("/aluno", AlunoController.store);
route.put("/aluno/:id", AlunoController.update);
route.delete("/aluno/:id", AlunoController.delete);

route.get("/parentes", ParenteController.index);
route.post("/parentes", ParenteController.create);

module.exports = route;
