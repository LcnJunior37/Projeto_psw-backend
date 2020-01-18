const enderecoService = require('../services/endereco.service')
const express = require('express');
const enderecoRouter = express.Router();

enderecoRouter.get('/users', enderecoService.findAllEndereco);

enderecoRouter.get('/users/:id', enderecoService.findEnderecoById);

enderecoRouter.post('/users', enderecoService.createEndereco);

enderecoRouter.put('/users/:id', enderecoService.updateEnderecor);

enderecoRouter.delete('/users/:id', enderecoService.deleteEndereco);

module.exports = enderecoRouter;
