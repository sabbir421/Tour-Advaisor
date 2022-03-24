import { Button, Input, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddHotel = () => {
  const[hotelName,setHotelName]=useState('')
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
      formData.append('adminEmail',adminEmail)
      formData.append('dis',dis)
      formData.append('image',image)

      fetch('http://localhost:4000/addHotel', {
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
      <h1>Add Your Hotel</h1>
      <form onSubmit={handleSubmit}>
      <TextField 
      label="Hotel Name" 
      onChange={e=>setHotelName(e.target.value)}
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
    </div>
  );
};

export default AddHotel;