const databaseService = require("../services/database.service");
const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM dirigir", (err, results) => {
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
      "SELECT * FROM dirigir where codDirigiu = ?",
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
const findByMotorista = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM dirigir where motorista = ?",
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
const findByVeiculo = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      "SELECT * FROM dirigir where veiculo = ?",
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
const create = dirigiu => {
  const dir = [
    (codDirigiu = dirigiu.codDirigiu),
    (motorista = dirigiu.motorista),
    (veiculo = dirigiu.veiculo),
    (data = dirigiu.data),
    (hora = dirigiu.hora)
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      "insert into dirigir (codDirigiu,motorista,veiculo,data,hora)  VALUES (?)",
      [dir],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(dir);
      }
    );
  });
};
const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE dirigir SET `;

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
      `DELETE FROM dirigir WHERE codDirigiu = ${id}`,
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
  findByMotorista,
  findByVeiculo
};
