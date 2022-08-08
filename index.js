const express = require("express");
const path = require('path')
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

// Serve frontend
if (process.env.MODE === 'DEVELOPMENT') {
  app.use(express.static(path.join(__dirname, './client/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, './', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


app.listen(process.env.PORT, () => {
  console.log(`App Started on Port ${process.env.PORT}`);
});
