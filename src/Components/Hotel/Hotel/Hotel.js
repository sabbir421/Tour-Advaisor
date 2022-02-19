import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Button } from 'react-bootstrap';
import HotelModal from '../HotelModal/HotelModal';


const Hotel = ({hotel}) => {
    
    const{hotelName,img,price,hotelDiscription,roomType}=hotel;

    const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
    return (
      <>
        <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} sm={7}>
         <img src={img} alt="" className='img-fluid m-2' />
        </Grid>
        <Grid item xs={12} sm={5} md={5} className='my-auto' >
        <h1 className='d-flex justify-content-center'>{hotelName}</h1>
        <h6 className='d-flex justify-content-center'>{hotelDiscription}</h6>
        <h4 className='d-flex justify-content-center'>{roomType}</h4>
        <h3 className='d-flex justify-content-center'>{price}</h3>
        <Button className='btn btn-primary rounded ' onClick={handleOpenModal} style={{marginLeft:'40%'}}>Book Now</Button>
        </Grid>
       
      </Grid> <hr />
    </Box>
        </Container>

        <HotelModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        hotel={hotel}
        ></HotelModal>
        </>
    );
};

export default Hotel;