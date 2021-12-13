const mongoose = require('mongoose')
const Schema   =  mongoose.Schema

const MessageSchema = new Schema({
  text: { type: String,
    required: [true, 'Must contain text']
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'Must contain user']
  }
})
const Message = mongoose.model('messages', MessageSchema)
module.exports = Message
