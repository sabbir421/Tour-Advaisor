import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Blog = ({blog}) => {
    return (
        <Container style={{marginTop:'10px'}}>
            <Grid item xs={12} sx={{bgcolor:'MediumSlateBlue',mt:2, borderRadius: 1,p:2,}}>
             <Typography sx={{color:'white'}} variant='h4'>{blog.headnig}</Typography>
             <h6>{blog.userName}</h6>
             <Typography sx={{color:'white'}} variant='p'>{blog.comment}</Typography>
             
           </Grid>
        </Container>
            
        
    );
};

export default Blog;