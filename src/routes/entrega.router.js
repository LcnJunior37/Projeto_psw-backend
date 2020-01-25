const entregaService = require("../services/entrega.service");
const express = require("express");
const entregaService = express.Router();

entregaService.get("/entrega", entregaService.findAllShipments);

entregaService.get("/entrega/:id",  entregaService.findShipmentById);

entregaService.get("/entrega/obra/:id", entregaService.findShipmentByConstruction);

entregaService.get("/entrega/dirigiu/:id", entregaService.findShipmentByDirigiu);

entregaService.post("/entrega",  entregaService.createShipment);

entregaService.put("/entrega/:id",  entregaService.updateShipment);

entregaService.delete("/entrega/:id",  entregaService.deleteShipment);

module.exports = entregaService;
