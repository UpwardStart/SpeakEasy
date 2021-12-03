const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({ path: "./config.env" })
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
mongoose.connect(process.env.ATLAS_URI);
app.use(cors());
app.use(express.json())
app.use(require("./routes/api"))
const dbo = require("./db/conn")

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  });
  console.log(`Server is running on port: ${port}`)
});
