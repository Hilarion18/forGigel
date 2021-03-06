const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')
// const checkPassword = require("../middleware/isUser");
// const generatePassword = require("../helpers/generatePassword")
const bcryptPass = require('../helpers/bcryptPass')

module.exports = {
  findAll: function(req,res) {
    User.find({})
    .then((user) => {
      res.status(200).json({
        user,
        message: `All users has been found`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `All users can't be found`
      })
    })
  },

  userProfile: function(req,res) {
    console.log(`req headers ====== `, req.headers);
    User.findOne({'email': req.data.email})
    .then((user) => {
      let name = user.name
      let email = user.email
      let phoneNumber = user.phoneNumber
      res.status(200).json({
        name,
        email,
        phoneNumber,
        // message: `All users has been found`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `All users can't be found`
      })
    })
  },

  login: function(req, res) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            jwt.sign(
            {
              userId: user._id,
              email: user.email
            },
            process.env.JWT_TOKEN,
            function(err, token) {
              if (!err) {
                res.status(201).json({
                  id: user.id,
                  token: token
                });
              } else {
                res.status(500).json({
                  message: `Email and password didn't match 1`
                });
              }
            }
            );
          } else {
              res.status(500).json({
              message: "email and password didnt match 2"
              });
            }
          } else {
            res.status(404).json({
                message: "you did not have account, please signup first 3"
            });
          }
      })
      .catch(err => {
        res.status(400).json({
          message: `Something's error from our server`
        })
      });
},

register: function(req, res) {
  console.log(`req body email `, req.body.email);
  let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!validateEmail.test(String(req.body.email).toLowerCase())) {
      res.status(400).json({
          message: `Please use correct email format`
      })
  } else if (validateEmail.test(String(req.body.email).toLowerCase())) {
      let dataUser = new User({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
      });
      dataUser.save()
      .then(user => {
        const token = jwt.sign({user}, process.env.JWT_TOKEN)
        res.status(201).json({
        id: user.id,
        token,
        score: user.score,
        message: `registration success`
        });
      })
      .catch(err => {
        res.status(500).json({
        err,
        message: `registration failed`
        });
      });
    } 
  },

  update: function (req,res) {
    User.updateOne(
      { _id : req.data.userId},
      { 
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
    },
    )
    .then((user) => {
      res.status(201).json({
        user,
        message: `hi ${req.body.name}, your account has been updated`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `update account failed`
      })
    })
  },
}