"use client";
import {IconButton, TextField, Box, Button} from '@mui/material';
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

    useEffect(() => {
        const startPixels = Array(canvasHeight * canvasWidth).fill("#fff");
        setPixelFill(startPixels);
    }, [canvasHeight, canvasWidth]);

    // clear all tools except selected tool
    const clearTools = (setFunc) => {
        setPencil(false);
        setEraser(false);
        setFillBucket(false);
        setFunc(true);
    }


    const handlePixelEvent = (index) => {
        if (pencil){
            setPixelFill((prev) => prev.map((currentColor, i) => (i === index ? color : currentColor)));
        } else if (eraser) {
            setPixelFill((prev) => prev.map((currentColor, i) => (i === index ? "#fff" : currentColor)));
        } else if (fillBucket){
            setPixelFill((prev) => Array(prev.length).fill(color));
        }
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

                {/* TODO: create onClick function: pop up are you sure? then clear canvas */}
                <IconButton>
                    <ClearIcon />
                </IconButton>

                {/* TODO: add button to hide/show grid lines */}

                <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />

                <TextField onChange={(e) => setCanvasHeight(e.target.value)} value={canvasHeight} label="Height"></TextField>

                <TextField onChange={(e) => setCanvasWidth(e.target.value)} value={canvasWidth} label="Width"></TextField>

                <Button>Generate</Button>
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
                {pixelFill.map((currentColor, i) => (
                    <div 
                        key={i} 
                        onClick={() => handlePixelEvent(i)}
                        style={{ 
                            width: '25px', 
                            height: '25px', 
                            border: '1px solid #ddd',
                            backgroundColor: currentColor
                        }}>

                    </div>
                ))}
            </Box>
        </Box>
    )
}