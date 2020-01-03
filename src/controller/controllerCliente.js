var User = require("../model/modelCliente.js");

exports.insert = function(req, res) {
  var new_cliente = new Cliente(req.body);

  //handles null error
  if (!new_cliente.codCliente) {
    res
      .status(400)
      .send({ error: true, message: "Favor inserir o codigo do cliente" });
  } else {
    User.createUser(new_cliente, function(err, cliente) {
      if (err) res.send(err);
      res.json(cliente);
    });
  }
};

exports.getClienteId = function(req, res) {
  User.getClienteId(req.params.codCliente, function(err, cliente) {
    if (err) res.send(err);
    res.json(cliente);
  });
};

exports.cliente_update = function(req, res) {
  User.updateById(req.params.codCliente, new Cliente(req.body), function(
    err,
    cliente
  ) {
    if (err) res.send(err);
    res.json(cliente);
  });
};

exports.cliente_delete = function(req, res) {
  Cliente.remove(req.params.codCliente, function(err, cliente) {
    if (err) res.send(err);
    res.json({ message: "Cliente deletado com sucesso" });
  });
};
