const express = require("express");
const routerUser = express.Router();
const User = require("../db/userDB.js");
const teste = require("../db/teste.js");

routerUser.get("/users", async (req, res, next) => {
  try {
    let result = await User.all();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

routerUser.get('/users/:id', async (req, res, next) => {
  try {
    let result = await User.getUser(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

routerUser.post('/users', (req, res, next) => {
  try {
    let us = [
      [(codUsuario = req.body.codUsuario)],
      [(tipo = req.body.tipo)],
      [(nome = req.body.nome)],
      [(senha = req.body.senha)]
    ];
    let result = teste.createUser(us);
    console.log(req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = routerUser;
