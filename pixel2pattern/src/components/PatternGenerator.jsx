import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CoPresent, CrueltyFreeRounded } from "@mui/icons-material";

export default function PatternGenerator({patternInfo}) {

    const [widthMultiplier, setWidthMultiplier] = useState(1.0);
    const [pattern, setPattern] = useState([]);

    useEffect(() => {
        generatePattern();
    }, [])

    // width
    // height
    // colorConfig - [#000, #000, #000] color array
    const colors = patternInfo.colorConfig;
    const width = patternInfo.width;

    const generatePattern = () => {
        let rows = 1;
        let currentRowContents = `Row ${rows}: `;
        let groupSize = 1;
        let tempPattern = [];
        for(let i = 0; i< colors.length-1; i++) {
             // Check to see if we need to move to another row
            if((i + 1) % width == 0) {
                currentRowContents += (groupSize * widthMultiplier) + " S.C. in " + colors[i];
                tempPattern.push(currentRowContents);
                rows++;
                currentRowContents = `Row ${rows}: `;
                groupSize = 1;
            } else{
                // Check if color is part of a group
                if(colors[i] === colors[i+1]) groupSize++;
                else {
                    currentRowContents += (groupSize * widthMultiplier) + " S.C. in " + colors[i] + ", ";
                    groupSize = 1;
                }
            }
        }

        currentRowContents += (groupSize * widthMultiplier) + " S.C. in " + colors[colors.length-1];
        tempPattern.push(currentRowContents);

        setPattern(tempPattern);

    }

    return(
        <>
            {pattern.length > 0 ? 
            (<> {pattern.map((row, index) => <li key={index}>{row}</li>)}</>)
            : (<Typography>Loading...</Typography>)}
        </>
    )
}