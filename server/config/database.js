const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "zainafzal",
  database: "ezpass",
});

module.exports = db;
