const databaseService = require("../services/database.service");

const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM dirigiu_alocacao", (err, results) => {
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
      "SELECT * FROM dirigiu_alocacao where codAlocacao = ?",
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

const create = dirigiu_Alo => {
  const dA = [
    (codDirigiu = dirigiu_Alo.codDirigiu),
    (codAlocacao = dirigiu_Alo.codAlocacao)
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      "INSERT INTO dirigiu_alocacao (codDirigiu,codAlocacao) VALUES (?)",
      [dA],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(dA);
      }
    );
  });
};

const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE dirigiu_alocacao SET `;

  let SET = "";
  keys.forEach((r, index) => {
    SET += `${r} = \'${values[index]}\', `;
  });

  SET = SET.replace(/, $/, " ");

  const WHERE = `WHERE codDirigiu = ${id}`;

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
      `DELETE FROM dirigiu_alocacao WHERE codAlocacao = ${id}`,
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
