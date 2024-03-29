import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


import axios from "axios";


const DetailSingleHotel = () => {
    const { id } = useParams();
  const [sdkReady, setSdkReady] = useState(false);
  const [loadingPay, setLoadingPay] = useState(false);
  const [booking, setBooking] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  let [color] = useState("#ffffff");

  const addPayPalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AXCZYiAA42dFzdLefmlCENuovXEgcxZnXD8LzgGbOORiClhXxyvlJTfJbeHSUFPJ_kdJdE9mN3CYRVpM";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
      setLoadingPay(true);
    };
    document.body.appendChild(script);
  };

  const successPaymentHandler =async (paymentResult) => {
    console.log("payment e dukche");
    // fetch(`https://tour-advaisor-server.herokuapp.com/booking-payment/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
     
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount) {
    //       console.log(data);
    //       setPaymentSuccess(true);
    //     }
    //   });
    const config = {
      headers: {
          'Content-type': 'application/json',
       
      }
  }

  const { data } = await axios.put(
    `https://tour-advaisor-server.herokuapp.com/hotel-payment/${id}`,
      config
  )
  setPaymentSuccess(true)
  console.log("Payment done");
  alert('payment done')

  };
  useEffect(() => {
    fetch("https://tour-advaisor-server.herokuapp.com/hotelBookings")
      .then((res) => res.json())
      .then((data) => {
        const info = data.find((dt) => dt._id === id);

        console.log(info);
        // console.log();
        setBooking(info);
      });
  }, [id, paymentSuccess]);

  useEffect(() => {
    if (!booking.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [booking]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

    
    return (
        <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{  }}>
          <Grid sx={{ mt: 2 }} className="container" item md={8} sm={12}>
            <Typography sx={{ textAlign: "center", m: 2, color: "#f44336" }}>
              Customer Name: {booking.customrName}
            </Typography>
            <Typography sx={{ textAlign: "center", m: 2,color: "#f44336" }}>
            Contact : {booking.phoneNumber}
            </Typography>
            <Typography sx={{ textAlign: "center", m: 2, color: "#f44336" }}>
              To: {booking.email}
            </Typography>
            <Typography sx={{ textAlign: "center", m: 2, color: "#f44336"}}>
              Price: {booking.price}
            </Typography>
          </Grid>

          <Grid sx={{ mt: 2, p: 2 }} item md={4} sm={12} container>
            
           <Col>
           {!booking.isPaid && (
                <ListGroup.Item>
                  {!sdkReady ? (
                    <div className="d-flex justify-content-center my-5">
                      <ClipLoader
                        color={color}
                        loading={loadingPay}
                        css={override}
                        size={150}
                      />
                    </div>
                  ) : (
                    <PayPalButton
                      amount={booking.amount}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
           </Col>

            
          </Grid>
        </Grid>
      </Box>
    </Container>
       
    );
};

export default DetailSingleHotel;