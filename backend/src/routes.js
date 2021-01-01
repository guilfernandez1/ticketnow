const express = require('express');

const UserController = require('./controllers/UserController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/list', UserController.index);
routes.post('/register', UserController.create);

routes.get('/listIncidents', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);
routes.put('/incident/:id', IncidentController.update);

module.exports = routes;