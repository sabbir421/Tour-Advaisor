import { Button, Grid, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import hotel from '../../../img/hotel.png'

const AddHotel = () => {
  const[hotelName,setHotelName]=useState('')
  const[place,setPlace]=useState('')
  const[dis,setDis]=useState('')
  const[adminEmail,setAdminEmail]=useState('')
  const [image,setImage]=useState(null);

  const handleSubmit =e=>{
      e.preventDefault()
      if(!image){
        return
      }
      const formData = new FormData();
      formData.append('hotelName',hotelName)
      formData.append('place',place)
      formData.append('adminEmail',adminEmail)
      formData.append('dis',dis)
      formData.append('image',image)

      fetch('http://localhost:5000/addHotel', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(result => {
  if(result.insertedId){
    console.log('data add successfully');
  }
})
.catch(error => {
  console.error('Error:', error);
});
  }
  return (
    <div>
       <Typography variant='h3' style={{color:'#7B68EE',fontFamily: " Cursive", marginTop:'10px'}}>Add Hotel</Typography>

      <Grid container spacing={2}>
  <Grid item xs={8}>
  <form onSubmit={handleSubmit}>
      <TextField 
      label="Hotel Name" 
      onChange={e=>setHotelName(e.target.value)}
      type="text"
      variant="standard" />
       <br />
      <TextField 
      label="Hotel Place" 
      onChange={e=>setPlace(e.target.value)}
      type="text"
      variant="standard" />
       <br />
      <TextField 
      label="Hotel Discription" 
      onChange={e=>setDis(e.target.value)}
      type="text"
      variant="standard" />
       <br />
      <TextField 
      label="AdminEmail"
      onChange={e=>setAdminEmail(e.target.value)} 
      type="email"
      variant="standard" />
      <br />
      <Input accept="image/*" 
      type="file"
      onChange={e=> setImage(e.target.files[0])}
      />
      <br />
      <Button variant="contained" type='submit'>
    Upload
  </Button>
      </form>
  </Grid>
  <Grid item xs={4}>
    <img src={hotel} className="img-fluid pe-2" style={{height:'400px', width:'450px'}} alt="" />
  </Grid>
  
</Grid>
    </div>
  );
};

export default AddHotel;