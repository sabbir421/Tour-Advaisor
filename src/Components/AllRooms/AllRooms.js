import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import AllRoom from '../AllRoom/AllRoom/AllRoom';



const AllRooms = () => {
    const { hotelAdminEmail,hotelName } = useParams();
    const [rooms,setRooms]=useState([])
    const [loading, setLoading] = useState(true);
    let [color] = useState("#ffffff");
    useEffect(()=>{
        fetch('http://localhost:5000/room')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setRooms(data);
            setLoading(false)
        })
    },[])
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    return (
       
            <Container>
                {/* <NavLink to='/roomAdd' ><Button variant='contained' sx={{ width: '100%',}} >Add New Room</Button></NavLink> */}

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
                      ) :(
                        <Grid container spacing={{ xs:2, md:2, }} columns={{ xs: 12, sm: 12, md: 11 }}>
                        {
                            rooms.map(room=><AllRoom
                            room={room}
                            hotelAdminEmail={hotelAdminEmail}
                            hotelName={hotelName}
                            ></AllRoom>)
                        }
                    </Grid>
                      )
                }
               
           
        </Container>
        
        
       
           
            
        
    );
};

export default AllRooms;