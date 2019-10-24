const route = require("express").Router();
const AlunoController = require("./controllers/AlunoController");

route.get("/aluno", AlunoController.index);
route.get("/aluno/:id", AlunoController.show);
route.post("/aluno", AlunoController.store);
route.put("/aluno/:id", AlunoController.update);
route.delete("/aluno/:id", AlunoController.delete);

module.exports = route;
