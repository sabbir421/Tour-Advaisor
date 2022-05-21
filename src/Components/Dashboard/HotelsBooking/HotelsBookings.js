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
import { NavLink } from 'react-router-dom';
import { Modal, } from 'antd';
import axios from 'axios';
const confirm = Modal.confirm;


const HotelsBookings = () => {
    const{user}=useAuth();
    const [bookedHotels,setBookedHotels]=useState([])
    const [status,setStatus]=useState({})
    
    useEffect(()=>{
        const url=`https://tour-advaisor-server.herokuapp.com/hotelBooking?email=${user.email}` 
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookedHotels(data)
        })


    }, [])

    useEffect(()=>{
      fetch('https://tour-advaisor-server.herokuapp.com/hotelBooking')
      .then(res=>res.json())
      .then(data=>{
        setStatus(data)
      })
    },[])


    function showDeleteConfirm(id) {
      confirm({
        title: 'Are you sure delete Booking Order?',
        content: 'Please Booking Another Tour',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          deletePost(id)
          
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }

    const deletePost=(id)=> {
      axios.delete(`https://tour-advaisor-server.herokuapp.com/hotelBooking/delete/${id}/`)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
      
        
        })  
      }
    return (
      <>
      
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
              <NavLink to={`/bookedRoomDetails/${row._id}/${row.hotelName}/${row.price}`}>
                {
                  status.isPaid ? 
                    <p style={{color:'green'}}>Paid</p>:
                    <p style={{color:'red'}}>Pending...</p>

                  
                }
               
                
                <Button variant='contained' style={{color:'blue',textDecoration:'none', marginRight:2,color:'white'}}>Details</Button></NavLink>
             <Button onClick={()=>showDeleteConfirm(bookedHotels._id)}>Remove</Button>
           
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

  

        </>
    );
};

export default HotelsBookings;