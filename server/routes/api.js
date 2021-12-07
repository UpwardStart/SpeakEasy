const express = require("express");
const argon2 = require('argon2')
const router = express.Router();
const ObjectId = require("mongodb").ObjectId
const Message = require('../models/messages')
const mongoose = require('mongoose');
const User = require('../models/users')
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



module.exports = router;
