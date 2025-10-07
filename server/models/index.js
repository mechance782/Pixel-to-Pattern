import { Patterns } from "./patterns.js";

export const getAllPatterns = async() => {
    try{
        const patterns = await Patterns.findAll();
        return patterns;
    } catch(err) {
        console.error("Error fetching patterns:", err);
        throw new Error("Error collecting all patterns in db");
    }
};

export const getPattern = async(ID) => {
    try{
        const pattern = await Patterns.findByPk(ID);
        return pattern;
    } catch (err) {
        console.error(`Error finding pattern with ID: ${ID}`);
        throw new Error(`Error finding pattern with ID: ${ID}`);
    }
}