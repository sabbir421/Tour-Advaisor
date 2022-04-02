import { Typography } from '@mui/material';
import React from 'react';

const Upcomming = () => {
    return (
        <div>
           <Typography sx={{textAlign: 'center',mt:4,mb:4}} style={{fontFamily:"Cursive",color:'#BA55D3'}} variant='h3'>Upcomming Packeges</Typography>
            <div className="mx-5 my-5">
  <div className="row shadow">
    <div className="col shadow p-2 ">
     <h3>Bandorban Tour</h3>
     <p>we make a barand new tour for you</p>
     <h5>price :5000 taka</h5>
     
    </div>
    <div className="col shadow p-2 ">
    <h3>Bandorban Tour</h3>
     <p>we make a barand new tour for you</p>
     <h5>price :5000 taka</h5>
     
    </div>
    <div className="col shadow p-2 ">
    <h3>Bandorban Tour</h3>
     <p>we make a barand new tour for you</p>
     <h5>price :5000 taka</h5>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Upcomming;