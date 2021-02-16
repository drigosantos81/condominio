const express = require('express');
const routes = express.Router();

const home = require('./app/controllers/homeControl');
const residents = require('./app/controllers/residentsControl');
const providers = require('./app/controllers/providersControl');

// HOME
routes.get('/', home.home);

// REGISTERS
routes.get('/admin/registers/residents', residents.index);
routes.get('/admin/registers/residents/create', residents.create);

routes.get('/admin/registers/providers', providers.index);
routes.get('/admin/registers/providers/create', providers.create);

// PAYMENTS

module.exports = routes;