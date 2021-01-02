const express = require('express');

const UserController = require('./controllers/UserController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/users', UserController.findAll);
routes.post('/register', UserController.create);

routes.get('/incidents', IncidentController.findAll);
routes.get('/incidents/:userId', IncidentController.find);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.put('/incidents/:id', IncidentController.update);

module.exports = routes;