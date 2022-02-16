import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import HotelsBookings from '../HotelsBooking/HotelsBookings';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <NavLink to='/home'><ListItemText primary="Home" /></NavLink>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <NavLink to='/addService'><ListItemText primary="Add Packeg" /></NavLink>
      </ListItem>
      <ListItem button>
      <NavLink to='/myOrder'><ListItemText primary="My Order" /></NavLink>
      </ListItem>
      <Divider light />
      <ListItem button>
      <NavLink to='/allOrder'><ListItemText primary="Manage Order" /></NavLink>
      </ListItem>
    </List>
        </Grid>
        <Grid item xs={8}>
        <HotelsBookings></HotelsBookings>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Dashboard;