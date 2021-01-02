const express = require('express');

const UserController = require('./controllers/UserController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/users', UserController.findAll);
routes.post('/register', UserController.create);

routes.get('/incidents/all', IncidentController.findAll);
routes.get('/incidents/:userId', IncidentController.find);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);
routes.put('/incident/:id', IncidentController.update);

module.exports = routes;