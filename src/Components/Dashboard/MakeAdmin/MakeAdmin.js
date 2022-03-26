import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import adminimg from '../../../img/admin.jpg'

const MakeAdmin = () => {
    const [email,setEmail]=useState(' ');
    const [success,setSucess]=useState(false)

    const handleOnBlur=e=>{
      setEmail(e.target.value)
    }
    const handleMakeAdmin=e=>{
        const user = { email };
        fetch('https://tour-advaisor-server.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
               'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                console.log(data);
                setEmail(' ');
                setSucess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <Container>
            <Typography variant='h3' style={{color:'#7B68EE',fontFamily: " Cursive", marginTop:'10px'}}>Make Admin</Typography>
        <Grid container spacing={2}>
           
  <Grid item xs={6} style={{marginTop:'100px'}}>
  <form onSubmit={handleMakeAdmin}>
            <TextField
            sx={{width: '75%'}}
              label="email"
              type="email"
              onBlur={handleOnBlur}
               variant="standard" />
               <br />
               <Button type='submit' variant='contained' sx={{m:2}}>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
  </Grid>
  <Grid item xs={4}>
  <img src={adminimg} className="img-fluid pe-2" style={{height:'400px', width:'450px'}} alt="" />
  </Grid>
  
</Grid>
</Container>
       
    );
};

export default MakeAdmin;