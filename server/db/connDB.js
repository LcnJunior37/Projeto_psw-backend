const mysql = require("mysql");
const conn = mysql.createPool({
  connectionLimit: 10,
  password: "",
  user: "root",
  database: "project_rose",
  host: "localhost",
  port: "3306"
});

//mysql.query();
module.exports = conn;
