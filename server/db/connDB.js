const mysql = require("mysql");
require('dotenv').config();

const conn = mysql.createPool({
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  connectionLimit: process.env.DATABASE_CONNECTION_LIMIT
});

module.exports = conn;
