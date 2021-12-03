const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema = new Schema({
  userId1: { type: mongoose.Schema.Types.ObjectId,
             ref: 'user',
             required: [true, 'Two users are required']
          },
  userId2: { type: mongoose.Schema.Types.ObjectId,
             ref: 'user',
             required: [true, 'Two users are required']
          },
  messages: [msgSchema],
  timestamps:{ type: Date,
               default: Date.now()
          }
})

const Chat = mongoose.model('chat', ChatSchema);
module.exports = Chat
