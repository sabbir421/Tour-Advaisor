
import { Box, Button } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';



const Header = () => {
    const {user,logOut}=useAuth();
   
  
  
  
    return (
        <div>
         <Navbar className='' bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Tour <span className='text-warning'>Advisor</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-warning' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-warning' as={HashLink} to="/service">Packege</Nav.Link>
                        <Nav.Link className='text-warning' as={HashLink} to="/allhotel">All Hotel</Nav.Link>
                 
                       {
                           user?.email?  <Box>
                                <NavLink to='/dashboard'> <Button style={{color:'white',textDecoration:'none'}}>Dashboard</Button></NavLink>
                               <Button onClick={logOut} style={{color:'white',textDecoration:'none'}}>Logout</Button>
                           </Box>:
                           <Nav.Link as={HashLink} to='/login'> <Button style={{color:'white',textDecoration:'none'}}>Login</Button></Nav.Link>
                       }
                        
                            
                          
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  
</div>
    );
};

export default Header;