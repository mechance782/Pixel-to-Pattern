import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function NavBar() {

    return(
        <>
            <AppBar position="static" sx={{pr: '10%', background: 'linear-gradient(90deg, #bbe1ebff 0%, #318397ff 65%)',}}>
                <Toolbar>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <img alt="Logo" style={{margin: '15px', height: '250px',width: 'auto',marginRight:'1rem',}} src="logo.png" />
                    </Box>
                    <Typography sx={{ flexGrow: 1, ml: '3rem'}} variant="h3">Pixel2Pattern</Typography>

                    <Button sx={{m: '2rem', fontSize:'1.5rem'}} color="inherit">Home</Button>
                    <Button sx={{m: '2rem', fontSize:'1.5rem'}} color="inherit">Create</Button>
                    <Button sx={{m: '2rem', fontSize:'1.5rem'}} color="inherit">FAQs</Button>
                </Toolbar>
            </AppBar>
        </>
    )
    
}

