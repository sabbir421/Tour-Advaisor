import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import { useParams } from "react-router-dom";



const DetailSingleHotel = () => {
    const { id } = useParams();
    const [sdkReady, setSdkReady] = useState(false);
    const [booking, setBooking] = useState({});
    const addPayPalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AXCZYiAA42dFzdLefmlCENuovXEgcxZnXD8LzgGbOORiClhXxyvlJTfJbeHSUFPJ_kdJdE9mN3CYRVpM";
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
  
    const successPaymentHandler = (paymentResult) => {
      console.log(paymentResult);
    };
    useEffect(()=>{
      fetch('http://localhost:5000/hotelBookings')
      .then(res=>res.json())
      .then(data=>{
          const info=data.find(dt=>dt._id===id)
          console.log(info);
          // console.log();
          setBooking(info)
        })
  },[]);

    
    return (
        <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ backgroundColor: "Highlight" }}>
            <Grid sx={{ mt: 2 }} className="container" item md={8} sm={12}>
              <Typography sx={{ textAlign: "center", m: 2, color: "white" }}>
               Customer Name: {booking.hotelBookings}
              </Typography>
              
              
            </Grid>
  
            <Grid sx={{ mt: 2, p: 2 }} item md={4} sm={12} container>
              <Col>
                <PayPalButton amount={booking.amount} onSuccess={successPaymentHandler} />
                {/* {!order.isPaid && (
                  <ListGroup.Item>
                      {loadingPay && <Loader />}
  
                      {!sdkReady ? (
                          <Loader />
                      ) : (
                          <PayPalButton
                              amount={order.totalPrice}
                              onSuccess={successPaymentHandler}
                          />
                      )}
                  </ListGroup.Item>
              )} */}
              </Col>
            </Grid>
          </Grid>
        </Box>
      </Container>
       
    );
};

export default DetailSingleHotel;