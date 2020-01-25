const databaseService = require("../services/database.service");

const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM obra", (err, results) => {
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
      "SELECT * FROM cliente where codObra = ?",
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

const findByEndereco = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM obra where endereco = ?",
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

const create = obra => {
  const construction = [
    (codObra = obra.codObra),
    (endereco = obra.endereco),
    (cliente = obra.cliente)
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      "INSERT INTO obra (codObra, endereco, cliente) VALUES (?)",
      [construction],
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

  const UPDATE = `UPDATE obra SET `;

  let SET = "";
  keys.forEach((r, index) => {
    SET += `${r} = \'${values[index]}\', `;
  });

  SET = SET.replace(/, $/, " ");

  const WHERE = `WHERE codObra = ${id}`;

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
      `DELETE FROM obra WHERE codObra = ${id}`,
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
  findByEndereco,
  create,
  updateOne,
  deleteOne
};
