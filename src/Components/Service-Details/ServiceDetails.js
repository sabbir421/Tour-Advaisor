import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  color:'blue',
  boxShadow: 24,
  p: 4,
};


const ServiceDetails = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const {user}=useAuth()
  console.log(user);
  const [details,setDetails]=useState({});
  const {id} = useParams();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{ 
    data.amount= details.price;
    data.placeName= details.name
    data.uid=user.uid;
    data.serviceId=id;
    data.userEmail=user.email;
    data.isPaid = false
    console.log(data)

    axios.post('https://tour-advaisor-server.herokuapp.com/bookingorder',data)
    .then(res=>{
        if (res.data.insertedId){
          handleOpen()
            reset()
        }
        console.log(res);
    });

  };
    
    


    // const sid = parseInt(id);
 
    useEffect(()=>{
        fetch('https://tour-advaisor-server.herokuapp.com/packege')
        .then(res=>res.json())
        .then(data=>{
            const info=data.find(dt=>dt._id===id)
            console.log(info);
            console.log(id);
            setDetails(info)
          })
    },[])
   
   
    return (
        <div className='d-flex justify-content-center '>

<div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Order Booked Successfully
          </Typography>
          
        </Box>
      </Modal>
    </div>
 <Container>
<Grid container spacing={2}>
  <Grid item xs={6} >
    <Typography style={{ fontFamily: "Serif", marginTop: "20px", marginLeft:'30%', color:'darkblue' }} variant='h5'>
     Host name : <span style={{color:'hotPink'}}> {details.hostName}</span>
    </Typography>
    <Typography style={{ fontFamily: "Serif",  color:'darkblue',marginLeft:'30%', }} variant='h6'>
     destination : <span style={{color:'hotPink'}}> {details.destination}</span>
    </Typography>
    <Typography style={{ fontFamily: "Serif",  color:'darkblue',marginLeft:'30%', }} variant='p'>
     Details : <span style={{color:'hotPink'}}> {details.discription}</span>
    </Typography>
    <Typography style={{ fontFamily: "Serif",marginLeft:'30%',  color:'darkblue' }} variant='h6'>
     Price : <span style={{color:'hotPink'}}> {details.price}</span>
    </Typography>

  </Grid>
  <Grid item xs={6}>
  <form className ='ms-5' onSubmit={handleSubmit(onSubmit)}>
      <input className='py-2 my-2 px-4' {...register("name")} placeholder='enter your name' required/>
      <br />
      <input className='py-2 my-2 px-4'  {...register("phone")} placeholder='phone' required/>
      <br />
      <input className='py-2 my-2 px-4'  {...register("from")} placeholder='your address' required/>
      <br />
      
      
     <Button variant='contained' type='subnit'>Submit</Button>
    </form>
  </Grid>
</Grid>
</Container>


           
    
          
          
           
        </div>
    );
};

export default ServiceDetails;