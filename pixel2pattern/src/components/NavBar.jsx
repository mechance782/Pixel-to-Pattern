import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function NavBar() {

    return(
        <>
            <AppBar position="static" sx={{pr: '10%'}}>
                <Toolbar>
                    <img alt="Logo" style={{width: '15%'}} src="logo.png" />
                    <Typography sx={{ flexGrow: 1 }} variant="h6">Pixel2Pattern</Typography>

                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Create</Button>
                    <Button color="inherit">FAQs</Button>
                </Toolbar>
            </AppBar>
        </>
    )
    
}