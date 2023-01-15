const express = require("express");
const dotenv = require("dotenv").config();
const mssql = require("mssql");

const database = express();

//DB configureation
const config = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  options: {
    trustServerCertificate: true,
  },
};

//Connect to Database
mssql.connect(config, (err) => {
  if (!err) {
    return "Database Connected Successfully";
  } else {
    return err;
  }
});

module.exports = config;
