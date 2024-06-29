const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "hostelsrishh.chagskcoeoyo.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "Srishdb#321",
  database: "mydatabase",
  port: 3306, 
  connectionLimit: 10 
});

module.exports = pool.promise();


