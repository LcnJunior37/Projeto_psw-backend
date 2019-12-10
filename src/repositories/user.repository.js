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

const findById = async id => {
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

const create = async user => {
  return new Promise((resolve, reject) => {
    databaseService.query(
      `INSERT INTO usuario (codUsuario, tipo, nome, senha) VALUES (${user.codUsuario},  \'${user.tipo}\', \'${user.nome}\', \'${user.senha}\')`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
      }
    );
  });
}

module.exports = {
  findAll,
  findById,
  create
}