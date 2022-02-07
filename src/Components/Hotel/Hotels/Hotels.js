import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels,setHotel]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sabbir421/hotel.json/main/generated.json')
        .then(res=>res.json())
        .then(data=>{setHotel(data)})
    },[]) 
    return (
        
        <div>
           {
               hotels.map(hotel=> <Hotel hotel={hotel}></Hotel>)
           }
        </div>
    );
};

export default Hotels;