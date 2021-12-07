const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new mongoose.Schema({
  username: { type: String,
              required: true,
              unique: true
          },
  createdAt: { type: Date,
               default: Date.now
          },
  password: { type: String,
              required: [true, 'Password is required']
          },
  firstName: String,
  lastName:  String,
  photoUrl:  String,
})

const User = mongoose.model('users', UserSchema)

module.exports = User
