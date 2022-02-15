import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Button } from 'react-bootstrap';


const Hotel = ({hotel}) => {
    console.log(hotel);
    const{name,img,price,discription,quantity}=hotel;
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} sm={7}>
         <img src={img} alt="" className='img-fluid m-2' />
        </Grid>
        <Grid item xs={12} sm={5} md={5} className='my-auto' >
        <h1 className='d-flex justify-content-center'>{name}</h1>
        <h6 className='d-flex justify-content-center'>{discription}</h6>
        <h4 className='d-flex justify-content-center'>{quantity}</h4>
        <h3 className='d-flex justify-content-center'>{price}</h3>
        <Button className='btn btn-primary rounded ' style={{marginLeft:'40%'}}>Book Now</Button>
        </Grid>
       
      </Grid> <hr />
    </Box>
        </Container>
    );
};

export default Hotel;