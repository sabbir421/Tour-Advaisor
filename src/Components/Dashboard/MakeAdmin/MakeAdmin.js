import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState(' ');
    const [success,setSucess]=useState(false)

    const handleOnBlur=e=>{
      setEmail(e.target.value)
    }
    const handleMakeAdmin=e=>{
        const user = { email };
        fetch('http://localhost:4000/users/admin', {
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
            <h1>Make Admin</h1>
            <form onSubmit={handleMakeAdmin}>
            <TextField
            sx={{width: '50%'}}
              label="email"
              type="email"
              onBlur={handleOnBlur}
               variant="standard" />
               <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;