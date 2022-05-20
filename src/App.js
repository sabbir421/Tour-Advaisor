


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
import Registation from './Components/log-in/Registation/Registation';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/log-in/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllHotels from './Components/AllHotels/AllHotels';
import AllRooms from './Components/AllRooms/AllRooms';
import AddRoom from './Components/Dashboard/AddRoom/AddRoom';
import ConfirmRoom from './Components/AllRoom/ConfirmRoom/ConfirmRoom';
import Services from './Components/Services/Services';
import AllRattings from './Components/Home/FeedBack/AllRattings/AllRattings';
import DetailSingleHotel from './Components/Dashboard/HotelsBooking/DetailSingleHotel';
import SinglePackegeDetails from './Components/MyOrder/SinglePackegeDetails';
import AllFeedbacks from './Components/AllFeedback/AllFeedbacks';
import Blogs from './Components/Blog/GetBlogs/Blogs';



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
          <Route path='/allhotel'>
            <AllHotels></AllHotels>
          </Route>
           
          <Route path='/service'>
           <Services></Services>
          </Route>
          <Route path='/blog'>
          <Blogs></Blogs>
          </Route>
          
         
          <Route path='/addRoom'>
           <AddRoom></AddRoom>
          </Route>
          <Route path='/room/:hotelAdminEmail/:hotelName'>
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
          <Route path='/allRattings'>
            <AllRattings></AllRattings>
          </Route>
          <Route path='/bookedRoomDetails/:id'>
           <DetailSingleHotel></DetailSingleHotel>
          </Route>
          <Route path='/singlePackge/:id'>
          <SinglePackegeDetails></SinglePackegeDetails>
          </Route>
          <Route path='/allFeedbacks'>
          <AllFeedbacks></AllFeedbacks>
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
