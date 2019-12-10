const connDB = require("./connDB.js");

let userDB = {};
userDB.all = () => {
  return new Promise((resolve, reject) => {
    connDB.query(
      "SELECT codUsuario, tipo, nome FROM usuario",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

userDB.getUser = id => {
  return new Promise((resolve, reject) => {
    connDB.query(
      "SELECT codUsuario, tipo, nome FROM usuario where codUsuario = ?",
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

userDB.createUser = user => {
  return new Promise((resolve, reject) => {
    connDB.query(
      `INSERT INTO usuario (codUsuario, tipo, nome, senha) VALUES (${user.codUsuario},  \'${user.tipo}\', \'${user.nome}\', \'${user.senha}\')`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve('Usuario inserido com sucesso');
      }
    );
  });
};
module.exports = userDB;
