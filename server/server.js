const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const cors = require("cors")
require("dotenv").config({ path: "./config.env" })
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
mongoose.connect(process.env.ATLAS_URI);
app.use(cors());
app.use(express.json())
app.use(require("./routes/api"))




io.on('connection', socket => {
  console.log('a user connected');
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});
