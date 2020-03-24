const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//login
routes.post('/sessions', SessionController.create);

//recuperar os dados da tabela ongs
routes.get('/ongs', OngController.index);
//postar na tabela ongs
routes.post('/ongs', OngController.create);
//recuperar os dados da tabela incidente

//Listar Ong especifica
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
//Criar incidente
routes.post('/incidents', IncidentController.create);
//deletar casos
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;