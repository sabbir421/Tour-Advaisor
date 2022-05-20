


// const allHotels=[
//     {   
//         id:1,
//         name:'sea crown',
//         point:'dhaka',
//         dis:'best hotel in dhaka',
//         img:'https://www.seapearlcoxsbazar.com/images/rt002.jpg'
//     },
//     {   
//         id:2,
//         name:'long beach',
//         point:'cox bazar',
//         dis:'best hotel in dhaka',
//         img:'https://www.seapearlcoxsbazar.com/images/rt002.jpg'
//     },
//     {   
//         id:3,
//         name:'hotel the cox',
//         point:'dhaka',
//         dis:'best hotel in dhaka',
//         img:'https://www.seapearlcoxsbazar.com/images/rt002.jpg'
//     },
//     {   
//         id:4,
//         name:'prime park',
//         point:'dhaka',
//         dis:'best hotel in dhaka',
//         img:'https://www.seapearlcoxsbazar.com/images/rt002.jpg'
//     },
//     {   
//         id:5,
//         name:'sea welcome',
//         point:'dhaka',
//         dis:'best hotel in dhaka',
//         img:'https://www.seapearlcoxsbazar.com/images/rt002.jpg',
//         email:'sabbir1@gmail.com'
//     },
//     {   
//         id:1,
//         name:'sea crown',
//         point:'dhaka',
//         dis:'best hotel in dhaka',
//         img:'https://www.seapearlcoxsbazar.com/images/rt002.jpg',
//     }
// ]

import { Container } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { css } from "@emotion/react";
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AllHotel from '../AllHotel/AllHotel';


const AllHotels = () => {
    const [hotels,setHotel]=useState([])
    const [loading, setLoading] = useState(true);
    let [color] = useState("#ffffff");
    useEffect(()=>{
        fetch("http://localhost:5000/addHotel")
        .then(res=>res.json())
        .then(data=>{
            setHotel(data);
            setLoading(false);
        })
    },[]) 
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    return (
        <Container>
            {
              loading ? (
                <div className="d-flex justify-content-center my-5">
                <ClipLoader
                  color={color}
                  loading={loading}
                  css={override}
                  size={150}
                />
              </div>
              ):(
                <div>
           {
               hotels.map(hotel=> <AllHotel hotel={hotel}></AllHotel>)
           }
        </div>
              )  
            }
            
        </Container>
        
    );
};

export default AllHotels;