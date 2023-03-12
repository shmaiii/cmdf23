import User from "../models/user.js";
import DiaryEntry from "../models/diaryentry.js";

export const getAllEntries = async (req, res) => {
    DiaryEntry.find({user: req.params.user_id})
    .sort('-date')
    .populate("user")
    .exec()
    .then(entries => {
        res.status(200).json({
            message: "Successfully retrieved all entries for this user",
            data: entries});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "Error!!",
            error: err,
        })
    
    })
};

export const getEntry = async (req, res) => {
    DiaryEntry.findById(req.params.entry_id)
    .populate("user")
    .exec()
    .then(entry => {
        res.status(200).json({
            message: "Successfully retrieved entry",
            data: entry
        });
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
};

export const createEntry = async (req, res) => {
    try {
    const newEntry = new DiaryEntry({
        journal: req.body.journal,
        images: req.body.images,
        videos: req.body.videos,
        date: req.body.date,
        user: req.body.user,
        mood: "positive" // change later using the cohere API
    });

    newEntry
    .save()
    .then((data) => {
        res.status(200).json({
            message: "Successfully created an entry",
            data: data,
        });
    })
    .catch((err) => {
        res.status(400).json({
            message: "Error",
            error: err
        })
    })
    } catch (err){
        res.status(500).json({
            message: "Internal server error",
            error: err
        });
    }
};

export const updateEntry = async (req, res) => {
    try {
        let newEntry = req.body;

        let mood = "positive" // change later with cohere API
        newEntry['mood'] = mood;

        const updatedEntry = await DiaryEntry.findByIdAndUpdate(req.params.entry_id, newEntry, {
            new: true,
        });

        if (updatedEntry) {
            res.status(200).json({
                message: "Successfully updated entry",
                data: updatedEntry,
            });
        } else throw 'Could not update entry'
    } catch (err) {
        res.status(400).json({message: error});
    }
}