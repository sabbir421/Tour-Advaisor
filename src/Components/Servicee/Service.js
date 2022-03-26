import { Grid } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
   
    const {hostName,image,destination,price,discription,_id}=service;
    
    return (
        
        <div >

<Grid item xs={12} sm={12} md={3} sx={{p:2,boxShadow: 3,borderRadius: 4,mb:4,m:2}} style={{justifyContent:'space-between'}} >
<img src={`data:image/png;base64,${image}`}alt=''  style={{width:'100%', }} />
<h1>{hostName}</h1>
<h3>{destination}</h3>
<p>{discription}</p>
<h6>{price}</h6>
<Link to={`/details/${_id}`}>
<button className="btn btn-warning">booking</button>
</Link>
            
    </Grid>
  
   
        </div>
    );
};

export default Service;