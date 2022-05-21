import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllFeedback from './AllFeedback';

const AllFeedbacks = () => {
    const[feedbacks,setFeedbacks]=useState([])
    useEffect(()=>{
        fetch('https://tour-advaisor-server.herokuapp.com/feedback')
        .then(req=>req.json())
        .then(data=>{setFeedbacks(data);
        })
    },[])
    return (
        
        <Container>
    <Typography className='text-warning' sx={{textAlign: 'center',m:2}} style={{fontFamily:"Cursive",}} variant='h3'>Customer Feedback</Typography>
<Grid container spacing={{ xs:2, md:2, }} columns={{  xs: 12, sm: 12, md: 11 }}>
      
      {
                feedbacks.map(feedback=><AllFeedback
                feedback={feedback}
                ></AllFeedback>)
      }
     </Grid>
    
    </Container>
    );
};

export default AllFeedbacks;