var User = require("../model/modelUsuario.js");

exports.insert = function(req, res) {
  var new_user = new User(req.body);

  //handles null error
  if (!new_user.codUsuario) {
    res
      .status(400)
      .send({ error: true, message: "Favor inserir o codigo do usuario" });
  } else {
    User.createUser(new_user, function(err, user) {
      if (err) res.send(err);
      res.json(user);
    });
  }
};

exports.getUsuarioId = function(req, res) {
  User.getUserById(req.params.codUsuario, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.usuario_update = function(req, res) {
  User.updateById(req.params.codUsuario, new User(req.body), function(
    err,
    user
  ) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.usuario_delete = function(req, res) {
  User.remove(req.params.codUsuario, function(err, user) {
    if (err) res.send(err);
    res.json({ message: "Usuario deletado com sucesso" });
  });
};
