import express from "express";
import { getAllEntries, getEntry, createEntry, updateEntry } from "./controllers/diaryentriesController.js";
import { getUser } from "./controllers/usersController.js";
const router = express.Router();

// DIARY ENTRY ENDPOINTS
router.get(`/api/diaryentries/:user_id`, getAllEntries);
router.get(`/api/getEntry/:entry_id`, getEntry);
router.put(`/api/updateEntry/:entry_id`, updateEntry);
router.post(`/api/createEntry`, createEntry);

// USER ENDPOINT
router.get(`/api/getUser/:user_id`, getUser);

export default router;