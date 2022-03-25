import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';

const HotelsBookings = () => {
    const{user}=useAuth();
    const [bookedHotels,setBookedHotels]=useState([])

    useEffect(()=>{
        const url=`http://localhost:4000/hotelBooking?email=${user.email}` 
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookedHotels(data)
        })


    }, [])
    return (
        <div>
            <h1 className='text-primary text-center text-uppercase fw-bolder'>My Hotel</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Hotel Booking List">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Hotel Name</TableCell>
            <TableCell align="right">Check in</TableCell>
            <TableCell align="right">Check out</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookedHotels.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customrName
}
              </TableCell>
              <TableCell align="right">{row.hotelName}</TableCell>
              <TableCell align="right">{row.checkin}</TableCell>
              <TableCell align="right">{row.checkout}</TableCell>
              <TableCell align="right">Double</TableCell>
              <TableCell align="right">{row.price} / night</TableCell>
              <TableCell align="right">
      <Button variant="outlined" color="error">Remove</Button>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default HotelsBookings;