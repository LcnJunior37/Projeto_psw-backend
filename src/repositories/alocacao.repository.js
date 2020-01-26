const databaseService = require("../services/database.service");
const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM alocacao", (err, results) => {
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
      "SELECT * FROM alocacao where codAlocacao = ?",
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
const findByObra = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM alocacao where obra = ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
const findByCliente = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM alocacao where cliente = ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
const create = alocacao => {
  const alo = [
    (codAlocacao = alocacao.codAlocacao),
    (cliente = alocacao.cliente),
    (obra = alocacao.obra),
    (valor = alocacao.valor),
    (dataInicio = alocacao.dataInicio),
    (dataFim = alocacao.dataFim)
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      "insert into alocacao (codAlocacao, cliente, obra, valor, dataInicio, dataFim)  VALUES (?)",
      [alo],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(alo);
      }
    );
  });
};
const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE alocacao SET `;

  let SET = "";
  keys.forEach((r, index) => {
    SET += `${r} = \'${values[index]}\', `;
  });

  SET = SET.replace(/, $/, " ");

  const WHERE = `WHERE codAlocacao = ${id}`;

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
      `DELETE FROM alocacao WHERE codAlocacao = ${id}`,
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
  deleteOne,
  findByCliente,
  findByObra
};
