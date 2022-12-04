const express = require("express");
const { uuid } = require("uuidv4");
const mssql = require("mssql");
const bcrypt = require("bcrypt");
const database = require("../Config/database");
const { registerSchema, loginSchema } = require("../Helpers/validator");
const router = express();

// Register user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = req.body;

  //hash password
  const saltRounds = 10;
  const plainPassword = password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plainPassword, salt);

  // Validate data
  await registerSchema.validateAsync(data);
  try {
    //Randomly generate an UserID
    const id = uuid();
    let pool = await mssql.connect(database);
    await pool
      .request()
      .input("UserID", mssql.VarChar, id)
      .input("Name", mssql.VarChar, name)
      .input("Email", mssql.VarChar, email)
      .input("Password", mssql.VarChar, hash)
      .execute("pr_Create_User");
    res.send("Register Successfully!");
  } catch (error) {
    res.send(error.message);
  }
};

const getUser = async (req, res) => {
  const { email, password } = req.body;
  const data = req.body;
  await loginSchema.validateAsync(data);
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
};

module.exports = {
  createUser,
  getUser,
};
