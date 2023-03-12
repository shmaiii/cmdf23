import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        password: String,
        // diary_entries: [{ 
        //     type: mongoose.ObjectId, 
        //     ref: "DiaryEntry"}],
        friends: [{
            type: mongoose.ObjectId,
            ref: "User"
        }] 
    }
);

const User = mongoose.model("User", userSchema);
export default User;