import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import feedback from '../../../img/feedback.jpg'

const Ratting = () => {
    const [comment,setComment]=useState('')
    const [rate,setRate]=useState('')
    const {user}=useAuth()

    const handleRatting=(e)=>{
      e.preventDefault();
        console.log(rate,comment,user.displayName);
        const formData=new FormData();
        formData.append("comment",comment);
        formData.append("rate",rate);
        formData.append("userName",user.displayName);

        fetch("http://localhost:4000/feedback", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    return (
        <Box sx={{ flexGrow: 1, }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
           <form onSubmit={handleRatting}>
           <TextField
            sx={{width:'75%',mt:4 }}
          label="Write Your Feedback"
          onChange={(e)=>setComment(e.target.value)}
          multiline
          variant="standard"
        /> <br />
           <TextField
           sx={{width:'75%', mt:2}}
          id="standard-textarea"
          label="Your Ratting Out Of 5"
          onChange={(e)=>setRate(e.target.value)}
          type='text'
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