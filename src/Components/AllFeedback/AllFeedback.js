import {  Grid, Rating,  } from '@mui/material';
import React from 'react';

const AllFeedback = ({feedback}) => {
    return (
        <Grid item xs={12} sm={12} md={3} sx={{p:2,boxShadow: 3,borderRadius: 4,mb:4,m:2}} style={{justifyContent:'space-between'}}>
                        <h6>{feedback.userName}</h6>
                        <p>{feedback.comment}</p>
                        <Rating readOnly name="half-rating" defaultValue={feedback.rate} precision={0.5} />
                </Grid>
    );
};

export default AllFeedback;