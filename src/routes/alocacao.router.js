const alocacaoService = require("../services/alocacao.service");
const express = require("express");
const alocacaoRouter = express.Router();

alocacaoRouter.get("/alocacao", alocacaoService.findAllAlocacao);

alocacaoRouter.get("/alocacao/:id", alocacaoService.findAlocacaoById);

alocacaoRouter.post("/alocacao", alocacaoService.createAlocacao);

alocacaoRouter.put("/alocacao/:id", alocacaoService.updateAlocacao);

alocacaoRouter.delete("/alocacao/:id", alocacaoService.deleteAlocacao);

module.exports = alocacaoRouter;
