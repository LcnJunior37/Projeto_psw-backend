const databaseService = require('../services/database.service');

const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      'SELECT codEndereco, tipo, nome FROM endereco',
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}

const findById = id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      'SELECT codEndereco, tipo, nome FROM endereco where codEndereco = ?',
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
}

const create = end => {
  const us = [
    codEndereco = end.codEndereco,
    log = end.log, //logradouro
    nome = end.nome,
    num = end.num
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      'INSERT INTO endereco (codEndereco, log, nome, num) VALUES (?)',
      [us],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(end);
      }
    );
  });
}

const updateOne = (id, dataToUpdate) => {
  const keys = Object.keys(dataToUpdate);
  const values = Object.values(dataToUpdate);

  const UPDATE = `UPDATE usuario SET `;

  let SET = '';
  keys.forEach((r, index) => {
    SET+=`${r} = \'${values[index]}\', `;
  })

  SET = SET.replace(/, $/, ' ');
  
  const WHERE = `WHERE codEndereco = ${id}`;

  const sqlQuery = UPDATE + SET + WHERE;;

  return new Promise((resolve, reject) => {
    databaseService.query(
      sqlQuery,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(dataToUpdate);
      }
    );
  });
};

const deleteOne = async id => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      `DELETE FROM endereco WHERE codEndereco = ${id}`,
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
}