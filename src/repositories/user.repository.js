const databaseService = require('../services/database.service');

const findAll = () => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      'SELECT codUsuario, tipo, nome FROM usuario',
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
      'SELECT codUsuario, tipo, nome FROM usuario where codUsuario = ?',
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

const create = user => {
  const us = [
    codUsuario = user.codUsuario,
    tipo = user.tipo,
    nome = user.nome,
    senha = user.senha
  ];
  return new Promise((resolve, reject) => {
    databaseService.query(
      'INSERT INTO usuario (codUsuario, tipo, nome, senha) VALUES (?)',
      [us],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
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
  
  const WHERE = `WHERE codUsuario = ${id}`;

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
      `DELETE FROM usuario WHERE codUsuario = ${id}`,
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