import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CoPresent } from "@mui/icons-material";

export default function PatternGenerator({patternInfo}) {

    const [widthMultiplier, setWidthMultiplier] = useState(1.0);
    const [pattern, setPattern] = useState();

    // width
    // height
    // colorConfig - [#000, #000, #000] color array
    const colors = patternInfo.colorConfig;
    const width = patternInfo.width;

    const generatePattern = () => {
        const rows = 0;
        const currentRowContents = "";
        const groupSize = 1;
        for(let i = 0; i< colors.length-1; i++) {
            if(colors[i] === colors[i+1]) groupSize++;
            else {
                currentRowContents += int(groupSize * widthMultiplier) + "S.C. in " + colors[i] + ", ";
                groupSize = 1;
            }
            // if(i -1 % width) {
                
            // }
        }
    }

    return(
        <Box>
            <Typography>Loading...</Typography>
        </Box>
    )
}