const express = require("express");
const routerUser = express.Router();
const User = require("../db/userDB.js");

routerUser.get("/", async (req, res, next) => {
  try {
    let result = await User.all();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
routerUser.get("/:id", async (req, res, next) => {
  try {
    let result = await User.getUser(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
routerUser.post("/", (req, res, next) => {
  try {
    const us = [
      (codUsuario = req.body.codUsuario),
      (tipo = req.bodytipo),
      (nome = req.body.nome),
      (senha = req.body.senha)
    ];
    User.createUser(us);
    /*  
    let user = req.body;
    console.log("@ " + req);
    let result = User.createUser(user);
    console.log("**");
    res.json(result); */
  } catch (e) {
    /* console.log(e);
    res.sendStatus(500); */
  }
});
module.exports = routerUser;
