require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(cors());

//get uri from env var
const url = process.env.MONGODB_URI;

//connect to mongodb
mongoose.connect(url)
.then(result => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error:', error.message)
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log('connected to MongoDB')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})