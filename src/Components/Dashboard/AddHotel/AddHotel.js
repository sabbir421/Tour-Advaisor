import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddHotel = () => {
    const [addHotel,setAddHotel]=useState({})

    const handleAddHotel=e=>{
       
        fetch('http://localhost:4000/addHotels', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addHotel)
        })

        .then(res => res.json())
            .then(data => {
               console.log(data);
            });



        e.preventDefault()
    }
    const handleOnBulr=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addHotel };
        console.log(field,value);
        newInfo[field] = value;
       
        setAddHotel(newInfo);
    }
    return (
        <div>
            <h1>Add Hotel</h1>
            <form onSubmit={handleAddHotel}>
            <TextField
            sx={{m:2}}
          id="outlined-textarea"
          name="hotelName"
          onBlur={handleOnBulr}
          label="Hotel Name"
          placeholder="Placeholder"
          multiline
        /> <br />
            <TextField
            sx={{m:2}}
          id="outlined-textarea"
          name="place"
          onBlur={handleOnBulr}
          label="hotel Place"
          placeholder="Hotel Place"
          multiline
        /> <br />
            <TextField
            sx={{m:2}}
          id="outlined-textarea"
          name="adminEmail"
          onBlur={handleOnBulr}
          label="AdminEmail"
          placeholder="AdminEmail"
          multiline
        /> <br />
        <TextField
             sx={{m:2}}
          id="outlined-textarea"
          name="roomType"
          onBlur={handleOnBulr}
          label="Room Type"
          placeholder="Placeholder"
          multiline
        /> <br />
            <TextField
             sx={{m:2}}
          id="outlined-textarea"
          name="hotelDiscription"
          onBlur={handleOnBulr}
          label="Hotel Discription"
          placeholder="Placeholder"
          multiline
        /> <br />
            
            <TextField
             sx={{m:2}}
          id="outlined-textarea"
          name="img"
          onBlur={handleOnBulr}
          label="img url"
          placeholder="Placeholder"
          multiline
        /> <br />
        <Button type='submit' variant='contained' sx={{m:2}}>Submit</Button>
            
            </form>
        </div>
    );
};

export default AddHotel;