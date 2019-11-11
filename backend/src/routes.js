const route = require('express').Router();
const AlunoController = require('./controllers/AlunoController');
const ParenteController = require('./controllers/ParenteController');
const ClasseController = require('./controllers/ClasseController');
const ProfessorController = require('./controllers/ProfessorController');

route.get('/alunos', AlunoController.index);
route.get('/aluno/:id', AlunoController.show);
route.post(
  '/parentes/:parentes_cpf/aluno/classe/:classe_id',
  AlunoController.store
);
route.put('/parentes/:parentes_cpf/aluno/:id', AlunoController.update);
route.delete('/parentes/:parentes_cpf/aluno/:aluno_id', AlunoController.delete);

route.get('/parentes', ParenteController.index);
route.get('/parentes/:cpf', ParenteController.show);
route.post('/parentes', ParenteController.store);
route.put('/parentes/:cpf', ParenteController.update);
route.delete('/parentes/:cpf', ParenteController.delete);

route.get('/classes', ClasseController.index);
route.get('/classes/:classe_id', ClasseController.show);
route.post('/classes', ClasseController.store);

route.get('/professor', ProfessorController.index);
route.post('/professor', ProfessorController.store);

module.exports = route;
