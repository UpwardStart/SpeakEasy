const express = require("express");
const argon2 = require('argon2')
const router = express.Router();
const ObjectId = require("mongodb").ObjectId
const Message = require('../models/messages')
const mongoose = require('mongoose');
const User = require('../models/users')
const jwt = require('jsonwebtoken')
router.get("/api/users", (req, res) => {
  User
    .find({})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json('An error has occurred'))
})

router.post("/api/message", (req, res) => {
  Message
    .create(req.body)
    .then( message => res.status(201).json(message))
    .catch(err => res.status(400).json('Something went wrong'));
})

router.get('/api/message', (req, res) => {
  Message
    .find({})
    .then(messages => res.status(200).json(messages))
    .catch(err => res.status(400).json('An error has occurred'))
})

router.post('/api/auth/sign-up', (req, res, next) => {
  const {username, password} = req.body
  if(!username || !password) {
    res.status(400).json('Username and password are required')
  } else {
    argon2
    .hash(password)
    .then(hashedPassword => {
      User
      .create({username, password: hashedPassword})
      .then(user => res.status(201).json(user))
      .catch(err => {
        if(err.code === 11000) {
          res.status(401).json('Username already exists, try again')
        } else {
          res.status(400).json('Invalid credentials please try again')
        }
      })
    })
  }
})

router.post('/api/auth/sign-in', (req, res) => {
  const {username, password} = req.body
  if(!username || !password){
    res.status(401).json('invalid login')
  } else {
    User
    .findOne({username})
    .then(user => {
      if(user === null){
        res.status(404).json('invalid login')
      } else {
        argon2
        .verify(user.password, password)
        .then(verification => {
          if(!verification){
            res.status(401).json('invalid login')
          } else {
            const credentials = {
              id: user._id,
              username: user.username
            }
            const token = jwt.sign(credentials, process.env.TOKEN_SECRET)
            res.status(200).json({credentials, token})
          }
        })
      }
    })
    .catch(err => res.status(401).json(err))
  }
})




module.exports = router;
