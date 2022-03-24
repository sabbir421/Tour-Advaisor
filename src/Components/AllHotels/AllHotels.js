


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

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllHotel from '../AllHotel/AllHotel';


const AllHotels = () => {
    const [hotels,setHotel]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/addHotel")
        .then(res=>res.json())
        .then(data=>{setHotel(data)})
    },[]) 
    return (
        
        <div>
           {
               hotels.map(hotel=> <AllHotel hotel={hotel}></AllHotel>)
           }
        </div>
    );
};

export default AllHotels;