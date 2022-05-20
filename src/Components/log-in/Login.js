import { Button, Container, Grid, TextField } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import login from '../../img/login4.svg'
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";


const Login = () => {
  const {singinUser,singinWithGoogle,isLoading,user}=useAuth();
  let [color] = useState("#ffffff");
  const [loginData,setLoginData]=useState({})

  const location = useLocation();
  const history = useHistory();

  

// Email Login
const emailLoginOnChange=e=>{
  const field=e.target.name;
  const value=e.target.value;
  // console.log(field,value);
  const newLoginData= {...loginData};
  newLoginData[field]=value;
  setLoginData(newLoginData)
}
const handleEmailLogin=e=>{
  singinUser(loginData.email, loginData.password,location,history)
  e.preventDefault()
 
  
}

// google singin

const googleSingin=()=>{
  singinWithGoogle(location,history)
}
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;


    return (
        <Container className='login-form   my-2'>
          <h1>Login</h1>
          {
            isLoading ?(
              <div className="d-flex justify-content-center my-5">
          <ClipLoader
            color={color}
            loading={isLoading}
            css={override}
            size={150}
          />
        </div>

            ):(

              <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <form onSubmit={handleEmailLogin}>
                <TextField
                sx={{width:'75%',m:'1'}}
                 id="standard-basic"
                  label="Your Email"
                  type='email'
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
                 <br />
                   <Button variant="contained" sx={{m:2}} type='submit'>Login</Button>
                </form>
<p>----------------------------------------------</p>
                <Button onClick={googleSingin} variant="contained" sx={{m:2}} type='submit'>Google Singin</Button> <br />

                <NavLink to ='/registation'><Button variant="text">New User ? go to Register</Button></NavLink>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={login} style={{width:'100%'}} alt="" />
              </Grid>
            </Grid>
            )
          }
            
            
        </Container>
    );
};

export default Login;