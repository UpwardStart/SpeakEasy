const express = require("express")
const app = express()
const http = require('http')
const cors = require("cors")
require("dotenv").config({ path: "./config.env" })
const server = http.createServer(app)
const { Server } = require('socket.io')
app.use(cors());
app.use(express.json())
app.use(require("./routes/api"))

const mongoose = require('mongoose')
mongoose.connect(process.env.ATLAS_URI);

const port = process.env.PORT || 5000

const io = new Server(server, {
  cors: 'http://localhost:3000',
  methods: ["GET", "POST"]
})

io.on("connection", socket => {
  console.log(`User connected: ${socket.id}`)

  socket.on('join_room', data => {
    socket.join(data)
    console.log(`user with ${socket.id} joined the ${data}`)
  })

  socket.on("disconnect", () => {
    console.log(`User has disconnected: ${socket.id}`)
  })

})

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
  });
