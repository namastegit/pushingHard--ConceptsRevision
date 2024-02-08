const jwt = require("jsonwebtoken");
const express = require("express");
const { JWT_SECRETS } = require("../config2");
const { Admin, Courses } = require("../database/index2");


async function adminSignUpMiddleware(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const userExists = await Admin.findOne({ username: username });
    if (!userExists) {
      next();
    } else {
      res.json({
        msg: "User Already exists"
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      msg: "User not created"
    });
  }
}

async function adminSigninMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const token = req.headers.token;

  try {
    const decoded = await jwt.verify(token, JWT_SECRETS);
    if (decoded.username) {
      next();
    } else {
      res.json({
        msg: "Unauthorized Access"
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Unauthorized Access"
    });
  }
}

module.exports = { adminSignUpMiddleware, adminSigninMiddleware };
