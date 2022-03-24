


import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/log-in/Login';
import ServiceDetails from './Components/Service-Details/ServiceDetails';
import NotFound from './Components/NotFound/NotFound';
import AddService from './Components/AddService/AddService';
import Myorder from './Components/MyOrder/Myorder';
import AllOrder from './Components/AllOrder/AllOrder';
import Hotels from './Components/Hotel/Hotels/Hotels';
import Registation from './Components/log-in/Registation/Registation';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/log-in/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllHotels from './Components/AllHotels/AllHotels';
import AllRooms from './Components/AllRooms/AllRooms';
import AddRoom from './Components/Dashboard/AddRoom/AddRoom';
import ConfirmRoom from './Components/AllRoom/ConfirmRoom/ConfirmRoom';


function App() {
  return (
    <div className="">
       
       <AuthProvider>
       <BrowserRouter>
       <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/details/:id'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path='/details/:id'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/hotel'>
            <Hotels></Hotels>
          </Route>
          <Route path='/allhotel'>
            <AllHotels></AllHotels>
          </Route>
          <Route path='/addRoom'>
           <AddRoom></AddRoom>
          </Route>
          <Route path='/room/:hotelAdminEmail'>
            <AllRooms></AllRooms>
          </Route>
          <Route path='/confirm'>
            <ConfirmRoom></ConfirmRoom>
          </Route>
          <Route path='/roomAdd'>
           <AddRoom></AddRoom>
          </Route>
         
          <Route path='/myOrder'>
            <Myorder></Myorder>
          </Route>
          <Route path='/allOrder'>
            <AllOrder></AllOrder>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='/registation'>
          <Registation></Registation>
          </Route>
          <Route  path='*'>
           <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
       </BrowserRouter>
      
       </AuthProvider>
        
    </div>
  );
}

export default App;
