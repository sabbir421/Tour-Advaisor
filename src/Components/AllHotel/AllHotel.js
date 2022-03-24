import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AllHotel = ({ hotel }) => {
  const { user, admin } = useAuth();
  // console.log(user);

  // const[name,img,dis,point]=allHotel();
  return (
    <Container>
      {`${user.email}` === `${hotel.adminEmail}` && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                src={`data:image/png;base64,${hotel.image}`}
                alt=""
                style={{ width: "80%", height: "350px", padding: "5px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <h1 style={{ color: "HotPink", fontFamily: "Cursive" }}>
                {hotel.hotelName}
              </h1>
              <h3
                style={{
                  color: "Lime",
                  fontFamily: "Monospace",
                  marginTop: "-20px",
                }}
              >
                {hotel.place}
              </h3>
              <p style={{ fontFamily: "Serif", marginTop: "-20px" }}>
                {hotel.dis}
              </p>
              <NavLink to={`/room/${hotel.adminEmail}`}>
                <Button variant="contained">View Room</Button>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      )}
      {!admin && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                src={`data:image/png;base64,${hotel.image}`}
                alt=""
                style={{ width: "80%", height: "350px", padding: "5px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <h1 style={{ color: "HotPink", fontFamily: "Cursive" }}>
                {hotel.hotelName}
              </h1>
              <h3
                style={{
                  color: "Lime",
                  fontFamily: "Monospace",
                  marginTop: "-20px",
                }}
              >
                {hotel.place}
              </h3>
              <p style={{ fontFamily: "Serif", marginTop: "-20px" }}>
                {hotel.dis}
              </p>
              <NavLink to={`/room/${hotel.adminEmail}`}>
                <Button variant="contained">View Room</Button>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default AllHotel;
