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
            <h1>Hotel Bookings{bookedHotels.length}</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Hotel Booking List">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Hotel Name</TableCell>
            <TableCell align="right">Date(To)</TableCell>
            <TableCell align="right">Date(To)</TableCell>
            <TableCell align="right">Type</TableCell>
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
              <TableCell align="right">12-10-22</TableCell>
              <TableCell align="right">14-10-22</TableCell>
              <TableCell align="right">Double</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default HotelsBookings;