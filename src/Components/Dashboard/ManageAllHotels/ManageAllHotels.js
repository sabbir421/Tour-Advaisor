
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ManageAllHotel from '../Dashboard/ManageAllHotel/ManageAllHotel';



const ManageAllHotels = () => {
    const [hotels,setHotels]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/hotelBookings')
        .then(res=>res.json())
        .then(data=>{
            setHotels(data)
            
        })

    },[])
    return (
       <Grid container spacing={2}>
           {hotels.map(hotel=><ManageAllHotel hotel={hotel}></ManageAllHotel>)}
       </Grid>
        
        
       
    );
};

export default ManageAllHotels;