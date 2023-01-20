const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { Client } = require("pg");

const database = express();

//DB configureation
const client = new Client({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

//Connect to Database
client.connect((err) => {
  if (!err) {
    console.log("Database Connected Successfully");
  } else {
    console.log(err);
    client.end();
  }
});

module.exports = client;
