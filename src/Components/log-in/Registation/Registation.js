import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../../img/login4.svg'
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';




const Registation = () => {
  const { registerUser,isLoading,user,authError}=useAuth();
    
    const [loginData,setLoginData]=useState({})

    const emailLoginOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        // console.log(field,value);
        const newLoginData= {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData)
      }
      const handleEmailLogin=e=>{
        e.preventDefault()
        if(loginData.password !== loginData.password2){
            alert('Password did not match');
            return
          }
          registerUser(loginData.email,loginData.password)
       
        
      
      }
    return (
        <Container className='login-form   my-2'>
          <h1>Registation</h1>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
               {! isLoading && <form onSubmit={handleEmailLogin}>
                <TextField
                sx={{width:'75%',m:'1'}}
                 id="standard-basic"
                  label="Your Email"
                   variant="standard"
                   name="email"
                   onChange={emailLoginOnChange}
                    />
                <TextField
                 sx={{width:'75%',m:'1'}}
                 id="standard-basic"
                  label="Password"
                  type="password"
                   variant="standard"
                   name="password"
                   onChange={emailLoginOnChange}
                    />
                    <TextField
                 sx={{width:'75%',m:'1'}}
                 id="standard-basic"
                  label="Password"
                  type="password"
                   variant="standard"
                   name="password2"
                   onChange={emailLoginOnChange}
                    />
                    
                     <br />
                   <Button variant="contained" type='submit' sx={{m:2}}>Sing Up</Button>
                </form>}
                {
                  isLoading && <CircularProgress />
                }

                {user?.email && <Alert severity="success">Congrates we created you Successfully</Alert>}

                {authError && <Alert severity="error">{authError}</Alert>}


                <NavLink to ='/login'><Button variant="text">Alredy Register ? go to Login</Button></NavLink>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={login} style={{width:'100%'}} alt="" />
              </Grid>
            </Grid>
            
           
        </Container>
    );
};

export default Registation;