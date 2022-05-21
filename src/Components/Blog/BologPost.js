import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const BologPost = () => {

    const [comment,setComment]=useState('')
    const [heading,setHeading]=useState('')
    const {user}=useAuth()

    const handleRatting=(e)=>{
      e.preventDefault();
        // console.log(rate,comment,user.displayName);
        const formData=new FormData();
        formData.append("heading",heading)
        formData.append("comment",comment);
        formData.append("userName",user.displayName);

        fetch("https://tour-advaisor-server.herokuapp.com/blog", {
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
          label="Write A Headding"
          onChange={(e)=>setHeading(e.target.value)}
          variant="standard"
        /> <br />
           <TextField
            sx={{width:'75%',mt:4 }}
          label="Write Your Blog"
          onChange={(e)=>setComment(e.target.value)}
          multiline
          variant="standard"
        /> <br />
            
        <Button variant='contained' type='submit' sx={{mt:2}}>POST</Button>
            </form>
          </Grid>
          <Grid item xs={6}>
            {/* <img src={feedback} className="img-fluid pe-2" style={{height:'400px', width:'450px'}} alt="" /> */}
          </Grid>
        </Grid>
      </Box>
    );
};

export default BologPost;