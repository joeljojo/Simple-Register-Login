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
    // Check if user exists
    let pool = await mssql.connect(database);
    const userExists = await pool
      .request()
      .input("Email", mssql.VarChar, email)
      .execute("pr_Check_If_User_Exixts");
    if (userExists.recordset != 0) {
      res.send("Email already exists");
    } else {
      // Randomly generate an UserID
      const id = uuid();
      await pool
        .request()
        .input("UserID", mssql.VarChar, id)
        .input("Name", mssql.VarChar, name)
        .input("Email", mssql.VarChar, email)
        .input("Password", mssql.VarChar, hash)
        .execute("pr_Create_User");
      res.send("Register Successfully!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getUser = async (req, res) => {
  const { email, password } = req.body;
  const data = req.body;
  await loginSchema.validateAsync(data);
  try {
    let pool = await mssql.connect(database);

    let loginResult = await pool
      .request()
      .input("Email", mssql.VarChar, email)
      .execute("pr_User_Login");
    if (loginResult.recordset != 0) {
      let bool = bcrypt.compareSync(
        password,
        loginResult.recordset[0].Password
      );
      if (bool == false) {
        res.send("Incorrect Username or Password");
      } else {
        res.send("Login Successfully");
      }
    } else {
      console.log("User Does not exist please Register");
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  createUser,
  getUser,
};
