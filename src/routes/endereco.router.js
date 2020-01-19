const enderecoService = require("../services/endereco.service");
const express = require("express");
const enderecoRouter = express.Router();

enderecoRouter.get("/enderecos", enderecoService.findAllEndereco);

enderecoRouter.get("/enderecos/:id", enderecoService.findEnderecoById);

enderecoRouter.post("/enderecos", enderecoService.createEndereco);

enderecoRouter.put("/enderecos/:id", enderecoService.updateEndereco);

enderecoRouter.delete("/enderecos/:id", enderecoService.deleteEndereco);

module.exports = enderecoRouter;
