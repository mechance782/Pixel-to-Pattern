import {getAll} from '../models/index.js'
import Patterns from '../models/patterns.js';


export const getUsers = (req, res) => {
    const users = getAll();
    res.json(users);
}

// CREATE

export const postPattern = async (req, res) => {
    try {
        // expect JSON object from req body with this format:
        // { pattern_name: "", pattern_rows: {}, description: ""}
        const pattern = req.body;

        // ! TODO: add validation for name and description
        
        const dbPattern = await Patterns.create(pattern);
        return res.status(201).json(dbPattern.pattern_ID);
    } catch (err) {
        console.error("post Pattern error: ", err);
        return res.status(500).json({ error: "Failed to post pattern"});
    }
}