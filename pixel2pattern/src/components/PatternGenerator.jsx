import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PatternGenerator({patternInfo}) {
    const [patternInstructions, setPatternInstructions] = useState([]);

    const colorConfig = patternInfo.colorConfig;
    // Width, Height and [#000, #000, #000] color array
    const traversePattern = () => {
        // Using the width, traverse through the array
            // CHECK: Is i + 1 % width 0?
            // YES: Start a new row
            // NO: Stay in this row
            // Check next color ahead to see if it matches 
            // YES: Increase group counter, move onto next element
            // NO: Print out COUNT + color, reset group counter to zero
    };

    useEffect(() => {
        traversePattern();
    }, []);

    return(
        <Box>
            <Typography>Loading...</Typography>
            {console.log("pattern info: ", patternInfo)}
        </Box>
    )
}