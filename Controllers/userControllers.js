const express = require("express");
const { uuid } = require("uuidv4");
const mssql = require("mssql");
const database = require("../Config/database");
const router = express();

// Register user
async function createUser(req, res) {
  const { name, email, password } = req.body;
  try {
    //Randomly generate an UserID
    const id = uuid();
    let pool = await mssql.connect(database);
    await pool
      .request()
      .input("UserID", mssql.VarChar, id)
      .input("Name", mssql.VarChar, name)
      .input("Email", mssql.VarChar, email)
      .input("Password", mssql.VarChar, password)
      .execute("pr_Create_User");
    res.send("Register Successfully!");
  } catch (error) {
    console.log(error.message);
  }
}

async function getUser(req, res) {
  const { email, password } = req.body;

  try {
    let pool = await mssql.connect(database);
    await pool
      .request()
      .input("Email", mssql.VarChar, email)
      .input("Password", mssql.VarChar, password)
      .execute("pr_User_Login");
    res.send("User Login Successfully!");
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  createUser,
  getUser,
};
