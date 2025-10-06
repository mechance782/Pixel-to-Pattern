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