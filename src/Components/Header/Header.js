
import { Button } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';



const Header = () => {
    const {user,logOut}=useAuth();
  
  
  
    return (
        <div>
         <Navbar className='mb-2' bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Tour <span className='text-warning'>Guide</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-warning' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-warning' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='text-warning' as={HashLink} to="/hotel">Hotel</Nav.Link>
                        
                            <Nav.Link className='text-warning' as={HashLink} to="/addService">Add Service</Nav.Link>
                            <Nav.Link className='text-warning' as={HashLink} to="/myOrder">My order</Nav.Link>
                              <Nav.Link className='text-warning' as={HashLink} to="/allOrder">Manage All Order</Nav.Link>

                        
                      

                       {
                           user?.email?  <Button onClick={logOut} style={{color:'white',textDecoration:'none'}}>Logout</Button>:
                           <Nav.Link as={HashLink} to='/login'> <Button style={{color:'white',textDecoration:'none'}}>Login</Button></Nav.Link>
                       }
                        
                            
                          
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  
</div>
    );
};

export default Header;