const databaseService = require("../services/database.service");

const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM entrega", (err, results) => {
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
      "SELECT * FROM entrega where codEntrega = ?",
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

const findByConstruction = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM entrega where obra = ?",
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

const findByDirigiu = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM entrega where dirigiu = ?",
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

const create = entrega => {
  const delivery = [
    (codEntrega = entrega.codEntrega),
    (obra = entrega.obra),
    (valor = entrega.valor),
    (dirigiu = entrega.dirigiu)
  ];
  console.log(delivery);
  return new Promise((resolve, reject) => {
    databaseService.query(
      "INSERT INTO entrega (codEntrega,obra,valor, dirigiu) VALUES (?)",
      [delivery],

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(obra);
      }
    );
  });
};

const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE entrega SET `;

  let SET = "";
  keys.forEach((r, index) => {
    SET += `${r} = \'${values[index]}\', `;
  });

  SET = SET.replace(/, $/, " ");

  const WHERE = `WHERE codEntrega = ${id}`;

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
      `DELETE FROM entrega WHERE codEntrega = ${id}`,
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
  findByConstruction,
  findByDirigiu,
  create,
  updateOne,
  deleteOne
};
