const clinteService = require('../services/cliente.service')
const express = require('express');
const clienteRouter = express.Router();

clienteRouter.get('/clinte', clinteService.findAllCliente);

clienteRouter.get('/clinte/:id', clinteService.findClienteById);

clienteRouter.post('/clinte', clinteService.createCliente);

clienteRouter.put('/clinte/:id', clinteService.updateCliente);

clienteRouter.delete('/clinte/:id', clinteService.deleteCliente);

module.exports = clienteRouter;
