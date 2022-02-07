import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Hotel = ({hotel}) => {
    console.log(hotel);
    const{name,img,price,discription,quantity}=hotel;
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={6}>
         <img src={img} alt="" className='img-fluid m-2' />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <h1>{name}</h1>
        <h6>{discription}</h6>
        <h4>{quantity}</h4>
        <h3>{price}</h3>
        </Grid>
       
      </Grid>
    </Box>
        </Container>
    );
};

export default Hotel;