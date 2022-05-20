import { Grid, Paper, Typography,  } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
const confirm = Modal.confirm;


const ManageAllHotel = ({hotel}) => {
    const {customrName,hotelName,checkin,checkout,phoneNumber,price}=hotel;

    function showDeleteConfirm(id) {
        confirm({
          title: 'Are you sure delete Booking Order?',
          content: 'Please Booking Another Tour',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            deletePost(id)
            
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

  
      const deletePost=(id)=> {
        axios.delete(`http://localhost:5000/hotelBookings/delete/${id}/`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
          
          })  
        }
   
    return (
       
          
          <Grid item xs={12} sm={6} md={4}>
                 <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600, }} style={{marginLeft:'10px'}} variant="h5" gutterBottom component="div">
                       Hotel: {hotelName}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 600, }} gutterBottom component="div" style={{marginLeft:'10px'}}>
                     Name: {customrName}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'info.main', fontWeight: 600, }} display="block" gutterBottom style={{marginLeft:'10px'}}>
                        Phone: {phoneNumber}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'info.main', fontWeight: 600, }} display="block" gutterBottom style={{marginLeft:'10px'}}>
                        Price: {price}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'info.main', fontWeight: 600, }} display="block" gutterBottom style={{marginLeft:'10px'}}>
                        Check in: {checkin}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'info.main', fontWeight: 600, }} display="block" gutterBottom style={{marginLeft:'10px'}}>
                       Check Out: {checkout}
                    </Typography>
                    <Button onClick={()=>showDeleteConfirm(hotel._id)} type="dashed"> Delete Booking</Button>
                   
                </Paper>
            </Grid>
             
    
    );
};

export default ManageAllHotel;