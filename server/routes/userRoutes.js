const express = require("express");
const routerUser = express.Router();
const User = require("../db/userDB.js");

routerUser.get("/users", async (req, res, next) => {
  try {
    let result = await User.all();
    res.send(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

routerUser.get('/users/:id', async (req, res, next) => {
  try {
    let result = await User.getUser(req.params.id);
    res.send(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

routerUser.post('/users', async (req, res, next) => {
  try {
    const us = {
      codUsuario: req.body.codUsuario,
      tipo: req.body.tipo,
      nome: req.body.nome,
      senha: req.body.senha
    };

    const result = await User.createUser(us);
    res.send(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = routerUser;
