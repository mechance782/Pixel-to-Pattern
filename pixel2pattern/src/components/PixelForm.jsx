"use client";
import {IconButton, TextField, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ClearIcon from '@mui/icons-material/Clear';
import {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';

export default function PixelForm() {
    // form detail states
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    // states for tools
    const [ pencil, setPencil] = useState(false);
    const [eraser, setEraser] = useState(false);
    const [fillBucket, setFillBucket] = useState(false);
    const [ color, setColor] = useState("#000000");
    const [ clearDrawingAlert, setClearDrawingAlert] = useState(false);

    // states for pixel canvas 
    const [ canvasHeight, setCanvasHeight] = useState(10);
    const [canvasWidth, setCanvasWidth] = useState(10);
    const [ pixelFill, setPixelFill] = useState([]);

    const router = useRouter();

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

    const handleCloseClearAlert = () => {
        setClearDrawingAlert(false);
    }

    const openClearAlert = () => {
        setClearDrawingAlert(true);
    }

    const clearDrawing = () => {
        setPixelFill((prev) => prev.fill("#fff"));
        handleCloseClearAlert();
    }

    const submitPixelForm = async() =>{
        const patternInfo = {
            width: canvasWidth,
            height: canvasHeight,
            colorConfig: pixelFill
        }

        const formSubmissionInfo = {
            pattern_name: name,
            pattern_info: patternInfo,
            description: description
        }

        try{
            const res = await fetch('http://localhost:3001/patterns',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(formSubmissionInfo)
                }
            )
            const postID = await res.json();

            if(!res.ok){
                throw new Error(`PostID: ${postID} is not ok.`);
            } else {
                router.push(`/view/${postID}`);
            }
        } catch (err) {
            console.log("Error submitting pixel art info ", err);
        }
    }

    return (
        // main body box
        <Box sx={{ margin: '1em', backgroundColor: 'white', padding: '2em', borderRadius: '5px'}}>


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
                <IconButton onClick={() => openClearAlert()}>
                    <ClearIcon />
                </IconButton>

                <Dialog
                    open={clearDrawingAlert}
                    onClose={handleCloseClearAlert}
                    aria-labelledby="Erase current drawing?"
                >
                    <DialogContent>
                        <DialogContentText >
                            Clear entire drawing?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions >
                        <Button size='small' onClick={handleCloseClearAlert}>Disagree</Button>
                        <Button size='small' onClick={clearDrawing} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* TODO: add button to hide/show grid lines */}

                <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />

                <TextField onChange={(e) => setCanvasHeight(e.target.value)} value={canvasHeight} label="Height"></TextField>

                <TextField onChange={(e) => setCanvasWidth(e.target.value)} value={canvasWidth} label="Width"></TextField>

                <Button onClick={submitPixelForm}>Generate</Button>
            </Box>

            {/* Name and description*/}
            <Box>
                <TextField onChange={(e) => setName(e.target.value)} value={name} label="Name"></TextField>
                <TextField onChange={(e) => setDescription(e.target.value)} value={description} multiline label="Description"></TextField>

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