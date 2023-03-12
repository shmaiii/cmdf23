import dotenv from "dotenv";
import express from "express"; // Express web server framework
import cors from "cors"; // Allows for Cross Origin Resource Sharing
import mongoose from "mongoose"; //Mongoose is a MongoDB library
// import User from './models/user.js';
// import DiaryEntry from "./models/diaryentry.js";
import router from "./router.js";

const app = express();
dotenv.config();
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

//testing database schema, delete later
// const user = new User({
//     username: 'user1',
//     password: 'user11234',
//     diary_entries: [],
//     friends: []
// })

// user.save().then(result => {
//     console.log('user saved')
// })

//testing diaryentry schema
// const entry = new DiaryEntry({
//     journal: "this is my diary",
//     images: [],
//     videos: [],
//     date: new Date(),
//     user: '640d339a41d1606599987b9c',
//     mood: 'positive'
// })

// entry.save().then(result => {
//     console.log('save');
//     mongoose.connection.close();
// })

app.use("/", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})