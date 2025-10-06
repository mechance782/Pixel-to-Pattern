import {getAllPatterns} from '../models/index'


export const getAllPatterns = async(req, res) => {
    try{
        const patterns = await getAllPatterns();
        res.status(200).json(patterns);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}