const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Srishti@1234",
  database: "hostel_management_system",
  connectionLimit: 10,
});

module.exports = pool.promise();
