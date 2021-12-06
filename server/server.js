const express = require("express")
const app = express()
const http = require('http')
const cors = require("cors")
const { Server } = require('socket.io')
require("dotenv").config({ path: "./config.env" })

app.use(cors());
app.use(express.json())
app.use(require("./routes/api"))


const server = http.createServer(app)

const mongoose = require('mongoose')
mongoose.connect(process.env.ATLAS_URI);

const port = process.env.PORT || 5000

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on("connection", socket => {
  console.log(`Use connected: ${socket.id}`)

  socket.on("disconnect", () => {
    console.log(`User has disconnected: ${socket.id}`)
  })

})

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
  });
