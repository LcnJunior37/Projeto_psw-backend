const clienteService = require("../services/cliente.service");
const express = require("express");
const clienteRouter = express.Router();

clienteRouter.get("/clientes", clienteService.findAllClientes);

clienteRouter.get("/clientes/:id", clienteService.findClienteById);

clienteRouter.post("/clientes", clienteService.createCliente);

clienteRouter.put("/clientes/:id", clienteService.updateCliente);

clienteRouter.delete("/clientes/:id", clienteService.deleteCliente);

module.exports = clienteRouter;
