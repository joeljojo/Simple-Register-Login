const express = require("express");
const { uuid } = require("uuidv4");
const bcrypt = require("bcrypt");
const database = require("../Config/database");
const { registerSchema, loginSchema } = require("../Helpers/validator");
const client = require("../Config/database");
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
  // Check if user exisits
  try {
    client.query(
      "SELECT * FROM USERS WHERE email =$1",
      [email],
      (err, result) => {
        if (result.rows.length > 0) {
          res.json("User Already exists");
        } else {
          const userID = uuid();
          client.query(
            `INSERT INTO users(userid, name, email, password) VALUES($1,$2,$3,$4) RETURNING *`,
            [userID, name, email, hash],
            (err, result) => {
              if (!err) {
                res.json("User Registered Successfully!");
              } else {
                throw err;
              }
            }
          );
        }
      }
    );
  } catch (err) {
    return err;
  }
};

const getUser = async (req, res) => {
  const { email, password } = req.body;
  const data = req.body;
  await loginSchema.validateAsync(data);
  try {
    client.query(
      "SELECT * FROM USERS WHERE email =$1",
      [email],
      (error, result) => {
        if (error) {
          throw error;
        } else {
          let storedPassword = result.rows[0].password;
          console.log(storedPassword);
          let bool = bcrypt.compareSync(password, storedPassword);
          if (bool == false) {
            res.json({
              status: false,
              message: "Incorrect Username or Password",
            });
          } else {
            res.json({ status: true, message: "Login Successfully" });
          }
        }
      }
    );
  } catch (err) {
    res.json("An error Occured");
  }
};

// const updateUser = async (req, res) => {};
module.exports = {
  createUser,
  getUser,
  // updateUser,
};
