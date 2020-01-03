"cliente strict";
var sql = require("./db.js");

var user = function(cliente) {
  this.codCliente = cliente.codCliente;
  this.CNPJ  = cliente.CNPJ;
  this.NomeEmpresa = cliente.NomeEmpresa;
  this.Email = cliente.Email;
  this.TelefoneContato = cliente.TelefoneContato;
};
User.createCliente = function(newCliente, result) {
  sql.query("INSERT INTO Clientes set ?", newCliente, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.getClienteById = function(ClienteId, result) {
  sql.query("Select Cliente from Clientes where id = ? ", ClienteId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.getAllUser = function(result) {
  sql.query("Select * from Cliente", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Cliente: ", res);

      result(null, res);
    }
  });
};
User.updateById = function(id, Cliente, result) {
  sql.query(
    "UPDATE Clientes SET Cliente = ? WHERE id = ?",
    [Cliente.codCliente, id],
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
Cliente.remove = function(id, result) {
  sql.query("DELETE FROM Cliente WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Cliente;
