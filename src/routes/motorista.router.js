const motoristaService = require("../services/motorista.service");
const EnderecoRouter = require("../services/endereco.service");
const express = require("express");
const motoristaRouter = express.Router();

motoristaRouter.get("/motorista", motoristaService.findAllMotorista);

motoristaRouter.get("/motorista/:id", motoristaService.findMotoristaById);

motoristaRouter.post("/motorista", motoristaService.createMotorista);

motoristaRouter.put("/motorista/:id", motoristaService.updateMotorista);

motoristaRouter.delete("/motorista/:id", motoristaService.deleteMotorista);

EnderecoRouter.get(
  "/motorista/endereco/:id",
  motoristaService.findMotoristaByEndereco
);

motoristaRouter.get(
  "/motorista/endereco/:id",
  motoristaService.findMotoristaByEndereco
);

module.exports = motoristaRouter;
