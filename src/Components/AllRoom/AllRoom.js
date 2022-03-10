import { Button, Grid } from '@mui/material';
import React from 'react';

const AllRoom = ({room}) => {
    return (
        
      <Grid item xs={12} sm={12} md={3} sx={{p:2,boxShadow: 3,borderRadius: 4,mb:4,m:2}} style={{justifyContent:'space-between'}}  >
      <img src={room.img} alt="" style={{width:'100%', }} />
       <h1>{room.type}</h1>
       <p>{room.dis}</p>
       <h1>{room.price}</h1>
       <Button variant='contained'>add to card</Button>
     </Grid>


    );
};

export default AllRoom;
