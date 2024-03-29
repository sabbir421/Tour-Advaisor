import React from 'react';
import { Carousel } from 'react-bootstrap';
import Bannar1 from'../../../src/img/bannar1.jpg'
import Bannar2 from'../../../src/img/bannar2.jpg'
import Bannar3 from'../../../src/img/bannar3.jpg'

const Bannar = () => {
    return (
        <div>
            <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bannar1}
      alt="First slide"
      height='450px'
    />
    <Carousel.Caption>
      <h3 className='text-white fw-bolder text-uppercase ms-4 '>Discover Bangladesh</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bannar2}
      alt="Second slide"
      height='450px'
    />

    <Carousel.Caption>
    <h3 className='text-white fw-bolder text-uppercase ms-4 '>Discover Bangladesh</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bannar3}
      alt="Third slide"
      height='450px'
    />

    <Carousel.Caption>
    <h3 className='text-white fw-bolder text-uppercase ms-4 '>Discover Bangladesh</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
         
        </div>
    );
};

export default Bannar;