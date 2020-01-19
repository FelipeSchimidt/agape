const route = require("express").Router();

const AlunoController = require("./controllers/AlunoController");
const ParenteController = require("./controllers/ParenteController");
const ClasseController = require("./controllers/ClasseController");
const ProfessorController = require("./controllers/ProfessorController");

route.get("/alunos", AlunoController.index);
route.get("/aluno/:matricula", AlunoController.show);
route.post("/aluno", AlunoController.store);
route.put("/aluno/:matricula", AlunoController.update);
route.delete("/aluno/:matricula", AlunoController.delete);

route.get("/parentes", ParenteController.index);
route.get("/parentes/:parentes_cpf", ParenteController.show);
route.post("/parentes", ParenteController.store);
route.put("/parentes/:parentes_cpf", ParenteController.update);
route.delete("/parentes/:parentes_cpf", ParenteController.delete);

route.get("/classes", ClasseController.index);
route.get("/classes/:id", ClasseController.show);
route.post("/classes", ClasseController.store);
route.put("/classes/:id", ClasseController.update);
route.delete("/classes/:id", ClasseController.delete);

route.get("/professor", ProfessorController.index);
route.post("/professor", ProfessorController.store);
route.put("/professor/:id", ProfessorController.update);
route.delete("/professor/:id", ProfessorController.delete);

module.exports = route;
