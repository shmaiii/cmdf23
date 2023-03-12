import User from "../models/user.js";
import DiaryEntry from "../models/diaryentry.js";

export const getUser = async (req, res) => {
    User.findById(req.params.user_id)
    .then(user => {
        res.status(200).json({
            message: "Successfully retrieved entry",
            data: user
        });
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}