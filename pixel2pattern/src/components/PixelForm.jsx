"use client";
import {IconButton, TextField, Box} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ClearIcon from '@mui/icons-material/Clear';
import {useEffect, useState} from "react";

export default function PixelForm() {

    // states for tools
    const [ pencil, setPencil] = useState(false);
    const [eraser, setEraser] = useState(false);
    const [fillBucket, setFillBucket] = useState(false);
    const [ color, setColor] = useState("#000000");

    // states for pixel canvas 
    const [ canvasHeight, setCanvasHeight] = useState(10);
    const [canvasWidth, setCanvasWidth] = useState(10);
    const [ pixelFill, setPixelFill] = useState([]);

    // clear all tools except selected tool
    const clearTools = (setFunc) => {
        setPencil(false);
        setEraser(false);
        setFillBucket(false);
        setFunc(true);
    }

    useEffect(() => {
        buildGrid(canvasHeight, canvasWidth);
    }, [canvasHeight, canvasWidth]);

    // Create pixels to fill grid
    function buildGrid(height, width){
        const pixels = [];
        for (let i = 0; i < width * height; i++){
            pixels.push(
                // TODO: add onClick handlers for drawing!
                <div key={i} style={{ width: '25px', height: '25px', border: '1px solid #ddd'}}>
                </div>
            )
        }
        setPixelFill(pixels);
    }

    return (
        // main body box
        <Box sx={{ margin: '2em 1em 2em 1em' }}>

            {/* Tool info bar */}
            <Box>
                <IconButton onClick={() => clearTools(setPencil)}>
                    <CreateIcon />
                </IconButton>

                <IconButton onClick={() => clearTools(setEraser)}>
                    <AutoFixNormalIcon color='error' />
                </IconButton>

                <IconButton onClick={() => clearTools(setFillBucket)}>
                    <FormatColorFillIcon />
                </IconButton>

                {/* create onClick function: pop up are you sure? then clear canvas */}
                <IconButton>
                    <ClearIcon />
                </IconButton>

                <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />

                <TextField onChange={(e) => setCanvasHeight(e.target.value)} value={canvasHeight} label="Height"></TextField>

                <TextField onChange={(e) => setCanvasWidth(e.target.value)} value={canvasWidth} label="Width"></TextField>
            </Box>

            {/* Canvas Grid and pixels */}
            <Box sx={{
                display: 'grid',
                justifyContent: 'center',
                justifyItems: 'center',
                width: 'fit-content',
                margin: '1em auto',
                border: '1px solid #ccc',
                gridTemplateColumns: `repeat(${canvasWidth}, 25px)`,
                gridTemplateRows: `repeat(${canvasHeight}, 25px)`
            }}>
                {pixelFill}
            </Box>
        </Box>
    )
}