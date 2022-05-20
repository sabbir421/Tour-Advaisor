// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';

// const AddService = () => {
//     const { register, handleSubmit,reset } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//     axios.post('https://tour-guide-serve.herokuapp.com/services',data)
//     .then(res=>{
//         console.log(res.data);
//         if (res.data.insertedId){
//             alert("data adeded")
//             reset()
//         }
//         console.log(res);
//     });
//   }
//     return (
//         <div>
//             <h1 className='d-flex justify-content-center'>Add Packege</h1>
//             <form className=' my-5' style={{marginLeft:'40%'}} onSubmit={handleSubmit(onSubmit)}>
//                 <input className='py-2 my-2 px-4' {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" /> <br />
//                 <input className='py-2 my-2 px-4' {...register("description")} placeholder="Description" /> <br />
//                 <input className='py-2 my-2 px-4' type="number" {...register("price")} placeholder="price" /> <br />
//                 <input className='py-2 my-2 px-4' {...register("img")} placeholder="image url" /> <br />
//                 <input className='py-2 my-2 px-4' type="submit" />
//             </form>
//         </div>
//     );
// };

// export default AddService;

import { Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddService = () => {
    const [hostName,setHostName]=useState('')
    const [destination,setDestination]=useState('')
    const [discription,setDiscription]=useState('')
    const [price,setPric]=useState('')
    const [image,setImage]=useState(null)

    const handleSubmit =(e)=>{
        e.preventDefault()
        const formData=new FormData();
        formData.append('hostName',hostName)
        formData.append('destination',destination)
        formData.append('discription',discription)
        formData.append('price',price)
        formData.append('img',image)
        fetch('http://localhost:5000/packege', {
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
        <Container>
          <Typography sx={{textAlign: 'center',m:2}} style={{fontFamily:"Cursive",color:'#BA55D3'}} variant='h3'>Add Your Packeg</Typography>
            <Grid container spacing={2}>
  <Grid item xs={8}>
    <form onSubmit={handleSubmit}>
    <TextField 
     label="Host Name"
     type="text" 
     onChange={e=>setHostName(e.target.value)}
     variant="standard"
      />
      <br />
    <TextField 
     label="Destination"
     type="text" 
     onChange={e=>setDestination(e.target.value)}
     variant="standard"
      />
      <br />
    <TextField 
     label="discription"
     type="text" 
     onChange={e=>setDiscription(e.target.value)}
     variant="standard"
      />
      <br />
    <TextField 
     label="price"
     type="number" 
     onChange={e=>setPric(e.target.value)}
     variant="standard"
      />
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
   <img src="" alt="" />
  </Grid>
</Grid>
        </Container>
    );
};

export default AddService;