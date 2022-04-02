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
        <h3 className='text-warning text-center text-uppercase fw-bold' style={{marginTop:'30px'}}>CONTACT US</h3>
        <p className='text-white text-center'>Tour Guide is a tour egency company in Bangladesh</p>
        <p className='text-white text-center'>Banani Dhaka Bangladesh</p>
        <p className='text-white text-center'>Call : 01475544142</p>
        <p className='text-white text-center'>email : asdf@gmail.com</p>
    </Col>
    <Col >
    <h1 className='text-warning text-center text-uppercase fw-bold'  style={{marginTop:'30px'}}>ABOUT US</h1>
        <p className='text-white text-center'>
        Some people want to get information about airlines, their office’s ticketing service online booking and other related things but they have to face some difficulties while getting or searching about this all
        </p>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Footer;