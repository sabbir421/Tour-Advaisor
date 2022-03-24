import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import AllRoom from '../AllRoom/AllRoom/AllRoom';



const AllRooms = () => {
    const { hotelAdminEmail,hotelName } = useParams();
    const [rooms,setRooms]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/room')
        .then(res=>res.json())
        .then(data=>{
            setRooms(data);
        })
    },[])
    return (
       
            <Container>
                <NavLink to='/roomAdd' ><Button variant='contained' sx={{ width: '100%',}} >Add New Room</Button></NavLink>
               
            <Grid container spacing={{ xs:2, md:2, }} columns={{ xs: 12, sm: 12, md: 11 }}>
            {
                rooms.map(room=><AllRoom
                room={room}
                hotelAdminEmail={hotelAdminEmail}
                hotelName={hotelName}
                ></AllRoom>)
            }
        </Grid>
        </Container>
        
        
       
           
            
        
    );
};

export default AllRooms;