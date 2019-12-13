const vehService = require('../services/vehicle.service')
const express = require('express');
const vehRouter = express.Router();

vehRouter.get('/vehicle', vehService.findAllUsers);

vehRouter.get('/vehicle/:id', vehService.findUserById);

vehRouter.post('/vehicle', vehService.createUser);

vehRouter.put('/vehicle/:id', vehService.updateUser);

vehRouter.delete('/vehicle/:id', vehService.deleteUser);

module.exports = vehRouter;
