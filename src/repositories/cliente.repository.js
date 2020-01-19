const databaseService = require("../services/database.service");

const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM cliente", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

const findById = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM cliente where codCliente = ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

const create = cliente => {
  const cli = [
    (codCliente = cliente.codCliente),
    (CNPJ = cliente.CNPJ),
    (NomeEmpresa = cliente.NomeEmpresa),
    (Email = cliente.Email),
    (TelefoneContato = cliente.TelContato)
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      "INSERT INTO cliente (codCliente, CNPJ, NomeEmpresa, Email, TelContato) VALUES (?)",
      [cli],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(cliente);
      }
    );
  });
};

const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE cliente SET `;

  let SET = "";
  keys.forEach((r, index) => {
    SET += `${r} = \'${values[index]}\', `;
  });

  SET = SET.replace(/, $/, " ");

  const WHERE = `WHERE codCliente = ${id}`;

  const sqlQuery = UPDATE + SET + WHERE;

  return new Promise((resolve, reject) => {
    databaseService.query(sqlQuery, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(dataToUpdate);
    });
  });
};

const deleteOne = async id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      `DELETE FROM cliente WHERE codCliente = ${id}`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(id);
      }
    );
  });
};

module.exports = {
  findAll,
  findById,
  create,
  updateOne,
  deleteOne
};
