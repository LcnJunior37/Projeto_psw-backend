const userService = require('../services/user.service')
const express = require('express');
const userRouter = express.Router();

userRouter.get('/users', userService.findAllUsers);

userRouter.get('/users/:id', userService.findUserById);

userRouter.post('/users', userService.createUser);

module.exports = userRouter;
