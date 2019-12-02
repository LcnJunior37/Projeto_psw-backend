"use strict";
module.exports = function(app) {
  var usuarios = require("../controller/controllerUsuario.js");

  // todoList Routes
  app.route("/usuario").post(usuario.insert);

  app
    .route("/usuario/:usuarioId")
    .get(usuarios.getUsuarioId)
    .put(usuarios.usuario_update)
    .delete(usuarios.usuario_delete);
};
