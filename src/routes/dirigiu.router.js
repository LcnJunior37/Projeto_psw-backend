const dirigiuService = require("../services/dirigiu.service");
const express = require("express");
const dirigiuRouter = express.Router();

dirigiuRouter.get("/dirigiu", dirigiuService.findAllDirigiu);

dirigiuRouter.get("/dirigiu/:id", dirigiuService.findDirigiuById);

dirigiuRouter.post("/dirigiu", dirigiuService.createDirigiu);

dirigiuRouter.put("/dirigiu/:id", dirigiuService.updateDirigiu);

dirigiuRouter.delete("/dirigiu/:id", dirigiuService.deleteDirigiu);

dirigiuRouter.get(
  "/dirigiu/motorista/:id",
  dirigiuService.findDirigiuByMotorista
);

dirigiuRouter.get("/dirigiu/veiculo/:id", dirigiuService.findDirigiuByVeiculo);

module.exports = dirigiuRouter;
