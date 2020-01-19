const databaseService = require("../services/database.service");

const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM endereco", (err, results) => {
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
      "SELECT * FROM endereco where codEnd = ?",
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

const create = end => {
  const endereco = [
    (codEnd = end.codEnd),
    (log = end.logradouro),
    (numero = end.numero),
    (cep = end.cep),
    (complemento = end.complemento),
    (bairro = end.bairro)
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      "INSERT INTO endereco (codEnd,logradouro,numero,cep,complemento,bairro) VALUES (?)",
      [endereco],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(end);
      }
    );
  });
};

const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE endereco SET `;

  let SET = "";
  keys.forEach((r, index) => {
    SET += `${r} = \'${values[index]}\', `;
  });

  SET = SET.replace(/, $/, " ");

  const WHERE = `WHERE codEnd = ${id}`;

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
      `DELETE FROM endereco WHERE codEnd = ${id}`,
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
