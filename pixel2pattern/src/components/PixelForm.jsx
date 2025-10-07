"use client";
import {IconButton} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ClearIcon from '@mui/icons-material/Clear';
import {useEffect, useState} from "react";

export default function PixelForm() {
    const [ pencil, setPencil] = useState(false);
    const [eraser, setEraser] = useState(false);
    const [fillBucket, setFillBucket] = useState(false);
    const [ color, setColor] = useState("#000000");

    const clearTools = (setFunc) => {
        setPencil(false);
        setEraser(false);
        setFillBucket(false);
        setFunc(true);
    }

    return (<>
        <IconButton onClick={() => clearTools(setPencil)}>
            <CreateIcon />
        </IconButton>

        <IconButton onClick={() => clearTools(setEraser)}>
            <AutoFixNormalIcon color='error'/>
        </IconButton>
        
        <IconButton onClick={() => clearTools(setFillBucket)}>
            <FormatColorFillIcon />
        </IconButton>

        {/* create onClick function: pop up are you sure? then clear canvas */}
        <IconButton>
            <ClearIcon />
        </IconButton>

        <input type='color' value={color} onChange={(e) => setColor(e.target.value)}/>
    </>)
}