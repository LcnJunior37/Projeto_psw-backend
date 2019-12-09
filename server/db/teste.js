const connDB = require("./connDB.js");
let userDB = {};

/* userDB.createUser = user => {
  //console.log(user.codUsuario);

  connDB.query("INSERT INTO usuario VALUES ?", [user], (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(null);
  });
}; */
userDB.createUser = user => {
  return new Promise((resolve, reject) => {
    connDB.query("INSERT INTO usuario VALUES ?", [user], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(user);
    });
  });
};
module.exports = userDB;
