import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { Box, Modal, Typography } from '@mui/material';

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
    console.log(data)

    axios.post('http://localhost:4000/bookingorder',data)
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
        fetch('https://tour-guide-serve.herokuapp.com/services')
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

            
            <Card className='border-0 shadow-xl' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={details.img} />
  <Card.Body>
    <Card.Title>{details.name}</Card.Title>
    <Card.Text>
      {details.description}
     
    </Card.Text>
    <Card.Text>
     <h3>price:  {details.price} </h3>
     
    </Card.Text>
    
  </Card.Body>
</Card>


           
<form className ='ms-5' onSubmit={handleSubmit(onSubmit)}>
      <input className='py-2 my-2 px-4' {...register("name")} placeholder='enter your name' required/>
      <br />
      <input className='py-2 my-2 px-4'  {...register("phone")} placeholder='phone' required/>
      <br />
      <input className='py-2 my-2 px-4'  {...register("from")} placeholder='your address' required/>
      <br />
      
      
      <input className ='bg-primary border-0 rounded shadow p-2 w-100 mt-2 text-white' type="submit"  />
    </form>    
          
          
           
        </div>
    );
};

export default ServiceDetails;