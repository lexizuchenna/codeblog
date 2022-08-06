const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const app = express();
connectDB();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true, limit: "25mb" }));

app.use('/api', require('./routes/api'))


app.listen(process.env.PORT, () => {
  console.log(`App Started on Port ${process.env.PORT}`);
});
