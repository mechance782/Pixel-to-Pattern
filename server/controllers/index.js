import {getAllPatterns, getPattern} from '../models/index.js'


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