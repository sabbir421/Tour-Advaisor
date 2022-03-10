import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const SuperAdmin = () => {
    const [email,setEmail]=useState(' ');
    const [success,setSucess]=useState(false)

    const handleOnBlur=e=>{
      setEmail(e.target.value)
    }
    const handleSuperAdmin=e=>{
        const user = { email };
        fetch('http://localhost:4000/users/SuperAdmin', {
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
        <div>
            <h1>Make Super Admin</h1>
            <form onSubmit={handleSuperAdmin}>
            <TextField
            sx={{width: '50%'}}
              label="email"
              type="email"
              onBlur={handleOnBlur}
               variant="standard" />
               <Button type='submit' variant='contained'>Make Super Admin</Button>
            </form>
            {success && <Alert severity="success">Made Super Admin successfully!</Alert>}
        </div>
    );
};

export default SuperAdmin;