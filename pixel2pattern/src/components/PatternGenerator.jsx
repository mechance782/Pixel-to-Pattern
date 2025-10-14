import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CoPresent } from "@mui/icons-material";

export default function PatternGenerator({patternInfo}) {

    const [widthMultiplier, setWidthMultiplier] = useState(1.0);
    const [pattern, setPattern] = useState([]);

    useEffect(() => {
        generatePattern();
    }, [])

    useEffect(() => {
        console.log(pattern);
    }, pattern)

    // width
    // height
    // colorConfig - [#000, #000, #000] color array
    const colors = patternInfo.colorConfig;
    const width = patternInfo.width;

    const generatePattern = () => {
        let rows = 1;
        let currentRowContents = `Row ${rows}: `;
        let groupSize = 1;
        for(let i = 0; i< colors.length-1; i++) {
             // Check to see if we need to move to another row
            if((i + 1) % width == 0) {
                setPattern((prev) => [...prev, currentRowContents]);
                currentRowContents = `Row ${rows}: `;
                rows++;
            } else{
                // Check if color is part of a group
                if(colors[i] === colors[i+1]) groupSize++;
                else {
                    currentRowContents += (groupSize * widthMultiplier) + " S.C. in " + colors[i] + ", ";
                    console.log("Current row changed: ", currentRowContents);
                    groupSize = 1;
                }
            }
            

        }

    }

    return(
        <Box>
            <Typography>Loading...</Typography>
        </Box>
    )
}