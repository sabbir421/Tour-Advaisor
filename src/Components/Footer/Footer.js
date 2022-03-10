import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../img/facebook.jpg'
import insta from '../../img/insta.webp'
import twiter from '../../img/twiter.jpg'

const Footer = () => {
    return (
        <div className='bg-dark'>
           <Container >
 
  <Row xs={1} md={2}>
    <Col>
        <h3 className='text-warning text-center text-uppercase fw-bold' style={{marginTop:'30px'}}>ABOUT US</h3>
        <p className='text-white text-center'>Tour Guide is a tour egency company in Bangladesh</p>
        <p className='text-white text-center'>Banani Dhaka Bangladesh</p>
        <p className='text-white text-center'>Call : 01475544142</p>
        <p className='text-white text-center'>email : asdf@gmail.com</p>
    </Col>
    <Col >
    <h1 className='text-warning text-center text-uppercase fw-bold'  style={{marginTop:'30px'}}>Follow Us</h1>
        <img style={{height:'75px',width:'75px',marginTop:'10px', marginLeft:'40%'}} src={facebook} alt="" /> <br />
        <img style={{height:'75px',width:'75px',marginTop:'10px', marginLeft:'40%'}} src={insta} alt="" /> <br />
        <img style={{height:'75px',width:'75px',marginTop:'10px', marginLeft:'40%',marginBottom:'15px'}} src={twiter} alt="" />
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Footer;