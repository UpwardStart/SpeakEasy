const express = require("express");
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

router.post("/api/sendMessage", (req, res) => {
  Message
    .create(req.body)
    .then( message => res.status(201).json(message))
    .catch(err => res.status(400).json('Something went wrong'));
})

router.get('/api/sendMessage', (req, res) => {
  Message
    .find({})
    .then(messages => res.status(200).json(messages))
    .catch(err => res.status(400).json('An error has occurred'))



})

module.exports = router;
