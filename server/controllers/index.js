import {getAllPatterns, getPattern, postPattern} from '../models/index.js'


export const getAll = async(req, res) => {
    try{
        const patterns = await getAllPatterns();
        res.status(200).json(patterns);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}
export const getSpecificPattern = async(req, res) => {
    const patternID = req.params.id;
    try{
        const pattern = await getPattern(patternID);
        res.status(200).json(pattern);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
}

// CREATE

export const uploadPattern = async (req, res) => {
    // expect JSON object from req body with this format:
    // { pattern_name: "", pattern_rows: {}, description: ""}
    const pattern = req.body;

    // ! TODO: add validation for name and description
    try {
        const patternID = await postPattern(pattern);
        res.status(201).json(patternID);
    } catch (err) {
        return res.status(500).json({ error: err.message});
    }
}