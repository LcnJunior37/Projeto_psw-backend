"user strict";
var sql = require("../model/dbConnection.js");

var user = function(user) {
  this.codUsuario = user.codUsuario;
  this.tipo = user.tipo;
  this.nome = user.nome;
  this.senha = user.senha;
};
User.createUser = function(newUser, result) {
  sql.query("INSERT INTO usuario set ?", newUser, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.getUserById = function(UserId, result) {
  sql.query(
    "Select codUsuario,tipo,nome from usuario where codUsuario = ? ",
    UserId,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
/*User.getAllUser = function(result) {
  sql.query("Select * from Users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Users : ", res);

      result(null, res);
    }
  });
};*/
User.updateById = function(User, result) {
  sql.query(
    "UPDATE usuario SET tipo = ?, nome = ? WHERE codUsuario = ?",
    [User.tipo, User.nome, User.codUsuario],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
User.remove = function(id, result) {
  sql.query("DELETE FROM usuario WHERE codUsuario= ?", [id], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
