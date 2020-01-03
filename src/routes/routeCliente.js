"cliente strict";
module.exports = function(app) {
  var clientes = require("../controller/controllerCliente.js");

  // todoList Routes
  app.route("/cliente").post(cliente.insert);

  app
    .route("/cliente/:clienteId")
    .get(clientes.getClienteId)
    .put(clientes.cliente_update)
    .delete(clientes.cliente_delete);
};
