const entregaService = require("../services/entrega.service");
const express = require("express");
const entregaRoute = express.Router();

entregaRoute.get("/entrega", entregaService.findAllShipments);

entregaRoute.get("/entrega/:id", entregaService.findShipmentById);

entregaRoute.get(
  "/entrega/obra/:id",
  entregaService.findShipmentByConstruction
);

/* entregaRoute.get("/entrega/dirigiu/:id", entregaService.findShipmentByDirigiu); */

entregaRoute.post("/entrega", entregaService.createShipment);

entregaRoute.put("/entrega/:id", entregaService.updateShipment);

entregaRoute.delete("/entrega/:id", entregaService.deleteShipment);

module.exports = entregaRoute;
