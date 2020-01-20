const databaseService = require("../services/database.service");
const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query("SELECT * FROM motorista", (err, results) => {
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
      "SELECT * FROM motorista where codEndereco = ?",
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
      "SELECT * FROM motorista where endereco = ?",
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
const create = motorista => {
  const mot = [

    (codMotorista = motorista.codMotorista),
    (nome = motorista.nome),
    (RG = motorista.RG),
    (email = motorista.email)
    (endereco = motorista.endereco)
    (TelefoneContato = motorista.TelefoneContato)

  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      "insert into motorista (codMotorista,nome,RG,email,endereco,TelefoneContato)  VALUES (?)",
      [mot],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(mot);
      }
    );
  });
};
const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE motorista SET `;

  let SET = "";
  keys.forEach((r, index) => {
    SET += `${r} = \'${values[index]}\', `;
  });

  SET = SET.replace(/, $/, " ");

  const WHERE = `WHERE codMotorista = ${id}`;

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
      `DELETE FROM motorista WHERE codMotorista = ${id}`,
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
};
