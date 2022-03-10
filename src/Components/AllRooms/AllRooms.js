import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-bootstrap';
import AllRoom from '../AllRoom/AllRoom';
const rooms=[
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o=',
        email:'sabbir1@gmail.com'

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
    {
        type:'single AC',
        dis:'single room with inside of sea Beatch',
        price:'5000',
        img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/175690827.jpg?k=c74bbcdf4461ef5536b482fa9166f5b466a94dd0fc5bc89698d1962103de9921&o='

    },
     
]


const AllRooms = () => {
    return (
       
            <Container>
                <NavLink to='/addroom'><Button variant='contained' sx={{ width: '100%',}} >Add New Room</Button></NavLink>
               
            <Grid container spacing={{ xs:2, md:2, }} columns={{ xs: 12, sm: 12, md: 11 }}>
            {rooms.map(room=><AllRoom
            room={room}
            ></AllRoom>)}
        </Grid>
        </Container>
        
        
       
           
            
        
    );
};

export default AllRooms;