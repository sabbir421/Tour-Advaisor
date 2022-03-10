import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import {
  
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import DasBoardHome from '../DashboardHome/DasBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrder from '../../AllOrder/AllOrder';
import useAuth from '../../../Hooks/useAuth';
import Myorder from '../../MyOrder/Myorder';
import AddService from '../../AddService/AddService';
import HotelsBookings from '../HotelsBooking/HotelsBookings';
import AddHotel from '../AddHotel/AddHotel';
import SuperAdmin from '../SuperAdmin/SuperAdmin';
import ManageAllHotels from '../ManageAllHotels/ManageAllHotels';
import mainCss from '../Dashboard/dashboard.css'


const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const{admin,superAdmin,user}=useAuth()
  console.log(user.email,admin,superAdmin,user.role);

    return (
        <Box  sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} >
        <List sx={style} component="nav" aria-label="mailbox folders" className='bg-primary'>
        <ListItem button>
        <NavLink to='/home' className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Home" /></NavLink>
      </ListItem>
          
{
  superAdmin && <Box>
     
    <ListItem button>
          <Link to={`${url}/superAdmin`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Make Super Admin" /></Link>
          </ListItem>
          <ListItem button>
          <Link to={`${url}/makeAdmin`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Make Admin" /></Link>
          </ListItem>
          <ListItem button>
          <Link to={`${url}/addService`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Add Packeges" /></Link>
          </ListItem>
          <ListItem button>
          <Link to={`${url}/addhotel`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Add Hotel" /></Link>
          </ListItem>
          <ListItem button>
          <NavLink to={`${url}/allOrder`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Manage Packege Order" /></NavLink>
          </ListItem>
          <ListItem button>
          <NavLink to={`${url}/allHotel`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Manage Hotel Order" /></NavLink>
          </ListItem>
  </Box>
}
           
          { admin  &&<Box>
          <ListItem button>
          <Link to={`${url}/makeAdmin`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Make Admin" /></Link>
          </ListItem>
          <ListItem button>
          <Link to={`${url}/addService`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Add Packeges" /></Link>
          </ListItem>
          <ListItem button>
          <Link to={`${url}/addhotel`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Add Hotel" /></Link>
          </ListItem>
          <ListItem button>
          <NavLink to={`${url}/allOrder`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Manage Packege Order" /></NavLink>
          </ListItem>
          <ListItem button>
          <NavLink to={`${url}/allHotel`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="Manage Hotel Order" /></NavLink>
          </ListItem>
          </Box>}


          <ListItem button>
          <NavLink to={`${url}/myHotel`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="My Hotel Booking" /></NavLink>
          </ListItem>
          <ListItem button>
          <NavLink to={`${url}/myOrder`} className='text-white fw-bolder text-uppercase ms-4'><ListItemText primary="My Packege" /></NavLink>
          </ListItem>
      
      <Divider light />
     
    </List>
        </Grid>
        <Grid className='db-main' style={mainCss} item xs={8}>
       <Switch>
        <Route exact path={path}>
          <DasBoardHome></DasBoardHome>
        </Route>
        <Route path={`${path}/superAdmin`}>
          <SuperAdmin></SuperAdmin>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/allOrder`}>
         <AllOrder></AllOrder>
        </Route>
        <Route path={`${path}/allHotel`}>
         <ManageAllHotels></ManageAllHotels>
        </Route>
        <Route path={`${path}/myOrder`}>
         <Myorder></Myorder>
        </Route>
        <Route path={`${path}/addService`}>
          <AddService></AddService>
        </Route>
        <Route path={`${path}/myHotel`}>
          <HotelsBookings></HotelsBookings>
        </Route>
        <Route path={`${path}/addhotel`}>
          <AddHotel></AddHotel>
        </Route>
      </Switch>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Dashboard;