import mongoose from "mongoose";
const Schema = mongoose.Schema;

const diaryEntrySchema = new Schema(
    {
        journal: {
            type: String,
        },
        images: [{type: String}],
        videos: [{type: String}],
        timestamps: true,
        user: {
            type: mongoose.ObjectId,
            ref: "User"
        },
        mood: {
            type: String
        }
    }
);

const DiaryEntry = mongoose.model("DiaryEntry", diaryEntrySchema);
export default DiaryEntry;