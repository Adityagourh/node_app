require("dotenv").config();
require("./config/modelConfig");
const express = require("express");
const router = require('./routes/usrRouter')

let app = express();
app.use(express.json()); // install json formate from express
app.use("/", router);

const HOST = 'localhost';
const PORT = process.env.PORT ||9000;

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on PORT : ${process.env.PORT}`);
});
