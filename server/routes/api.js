const express = require("express");
const router = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId
const Message = require('../models/messages')
const mongoose = require('mongoose');

router.get("/api/users", (req, res) => {
  let db_connect = dbo.getDb("speakEasy")
  db_connect
    .collection("users")
    .find({})
    .toArray( (err, result) => {
      if(err) throw err;
      res.json(result);
    })
})

router.post("/api/sendMessage", (req, res) => {
  Message.create(req.body)
  .then( message => res.status(201).json(message))
  .catch(err => res.status(400).json('Something went wrong'));
})

router.get('/api/sendMessage', async (req, res) => {
  const messages = await Message.find({})
  res.status(200).json(messages);

})

module.exports = router;
