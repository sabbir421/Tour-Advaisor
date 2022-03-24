import { Button, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

import ConfirmRoom from '../ConfirmRoom/ConfirmRoom';



const AllRoom = ({room,hotelAdminEmail,}) => {
  
  console.log(hotelAdminEmail);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
    return (
        <>
        {
          `${hotelAdminEmail}`===`${room.roomAdminEmail
          }` &&<Grid item xs={12} sm={12} md={3} sx={{p:2,boxShadow: 3,borderRadius: 4,mb:4,m:2}} style={{justifyContent:'space-between'}}  >
          <img src={`data:image/png;base64,${room.image}`}alt=''  style={{width:'100%', }} />
           <h1>{room.type}</h1>
           <p>{room.dis}</p>
           <h1>{room.price}</h1>
           <Rating name="read-only" value={room.ratting} readOnly />
          <Button variant='contained' onClick={handleOpenModal}>Book Now</Button>
         </Grid>
        }
      

      <ConfirmRoom
       openModal={openModal}
       handleCloseModal={handleCloseModal}
      room={room}
      ></ConfirmRoom>
      </>
    );
};

export default AllRoom;
