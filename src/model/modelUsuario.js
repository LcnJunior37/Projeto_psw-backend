"user strict";
var sql = require("./db.js");

var user = function(user) {
  this.codUsuario = user.codUsuario;
  this.tipo = user.tipo;
  this.nick = user.nick;
  this.nick = user.senha;
};
User.createUser = function(newUser, result) {
  sql.query("INSERT INTO Users set ?", newUser, function(err, res) {
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
  sql.query("Select User from Users where id = ? ", UserId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.getAllUser = function(result) {
  sql.query("Select * from Users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Users : ", res);

      result(null, res);
    }
  });
};
User.updateById = function(id, User, result) {
  sql.query(
    "UPDATE Users SET User = ? WHERE id = ?",
    [User.codUsuario, id],
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
  sql.query("DELETE FROM Users WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
