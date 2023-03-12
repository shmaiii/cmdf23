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
        
    }
)