import { Container, Grid, Typography } from '@mui/material';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feedback from '../Feedback/Feedback';

const Feedbacks = () => {
    const[feedbacks,setFeedbacks]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/feedback')
        .then(res=>res.json())
        .then(data=>{
            setFeedbacks(data)
        })
    },[])
    return (
       
           

<Container>
    <Typography sx={{textAlign: 'center',m:2}} style={{fontFamily:"Cursive",color:'#800080'}} variant='h3'>Customer Feedback</Typography>
<Grid container spacing={{ xs:2, md:2, }} columns={{  xs: 12, sm: 12, md: 11 }}>
      
      {
                feedbacks.map(feedback=><Feedback
                feedback={feedback}
                ></Feedback>)
      }
     </Grid>
    </Container>
        
    );
};

export default Feedbacks;