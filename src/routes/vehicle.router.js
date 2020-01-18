const vehService = require("../services/vehicle.service");
const express = require("express");
const vehRouter = express.Router();

vehRouter.get("/vehicle", vehService.findAllVehicle);

vehRouter.get("/vehicle/:id", vehService.findVehicleById);

vehRouter.post("/vehicle", vehService.createVehicle);

vehRouter.put("/vehicle/:id", vehService.updateVehicle);

vehRouter.delete("/vehicle/:id", vehService.deleteVehicle);

module.exports = vehRouter;
