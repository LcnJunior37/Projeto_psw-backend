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

/* userDB.createUser = user => {
  //console.log(user.codUsuario);

  connDB.query("INSERT INTO usuario VALUES ?", [user], (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(null);
  });
}; */

module.exports = userDB;
