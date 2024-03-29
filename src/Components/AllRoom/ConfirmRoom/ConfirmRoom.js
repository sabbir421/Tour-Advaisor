import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const HotelModal = ({ openModal, handleCloseModal, room, hotelName }) => {
  const { type, price } = room;
  const { user } = useAuth();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [roomBooking, setHotelBooking] = useState({});

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("function called");
    const selectRoom = {
      ...roomBooking,
      type: type,
      price: price,
      email: user.email,
      hotelName: hotelName,
      isPaid: false,
      isBooked:true
    };
    console.log("selectRoom", selectRoom);
    fetch("http://localhost:5000/hotelBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectRoom),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleOpen();
      });

    e.preventDefault();

    handleCloseModal();
  };

  const handleHotelBooking = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...roomBooking };
    newInfo[field] = value;

    setHotelBooking(newInfo);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Hotel Booking Successfully done
          </Typography>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {type}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {price}
            </Typography>

            <form onSubmit={handleBookingSubmit}>
              <TextField
                sx={{ m: 2 }}
                label="name"
                id="outlined-size-small"
                defaultValue=""
                name="customrName"
                onBlur={handleHotelBooking}
                size="small"
                required
              />

              <TextField
                sx={{ m: 2 }}
                label="Phone Number"
                id="outlined-size-small"
                defaultValue=""
                name="phoneNumber"
                onBlur={handleHotelBooking}
                size="small"
                required
              />
              <TextField
                sx={{ m: 2 }}
                label="Check In"
                id="outlined-size-small"
                defaultValue=""
                name="checkin"
                onBlur={handleHotelBooking}
                size="small"
                required
              />
              <TextField
                sx={{ m: 2 }}
                label="check Out"
                id="outlined-size-small"
                defaultValue=""
                name="checkout"
                onBlur={handleHotelBooking}
                size="small"
                required
              />

              <br />
              <Button type="submit" sx={{ m: 2 }} variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default HotelModal;
