import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import feedback from '../../../img/feedback.jpg'

const Ratting = () => {
    const [comment,setComment]=useState('')
    const [rate,setRate]=useState('')

    const handleRatting=e=>{
        
    }
    return (
        <Box sx={{ flexGrow: 1, }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
           <form onClick={handleRatting}>
           <TextField
            sx={{width:'75%',mt:4 }}
          label="Write Your Feedback"
        
          multiline
          variant="standard"
        /> <br />
           <TextField
           sx={{width:'75%', mt:2}}
          id="standard-textarea"
          label="Your Ratting Out Of 5"
          type='number'
          variant="standard"
        /> <br />
        <Button variant='contained' type='submit' sx={{mt:2}}>Send Feedback</Button>
            </form>
          </Grid>
          <Grid item xs={6}>
            <img src={feedback} className="img-fluid pe-2" style={{height:'400px', width:'450px'}} alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Ratting;