import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import room from "../../../img/room.jpg"

const AddRoom = () => {

  const [type, setType] = useState("");
  const [dis, setDis] = useState("");
  const [price, setPrice] = useState("");
  const [ratting,setRatting]=useState("")
  const [roomAdminEmail, setRoomAdminEmail] = useState("");
  const [image, setImage] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("type", type);
    formData.append("ratting", ratting);
    formData.append("dis", dis);
    formData.append("price", price);
    formData.append("roomAdminEmail", roomAdminEmail);
    formData.append("image", image);

    fetch("http://localhost:4000/room", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Typography sx={{textAlign: 'center',m:2}} style={{fontFamily:"Cursive",color:'#BA55D3'}} variant='h3'>Add New Room</Typography>

      <Grid container spacing={2}>
  <Grid item xs={6}>
  <form onSubmit={handleSubmit}>
        <TextField
          required
          onChange={(e) => setType(e.target.value)}
          label="RoomType"
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          required
          onChange={(e) => setDis(e.target.value)}
          label="Discription"
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          required
          onChange={(e) => setPrice(e.target.value)}
          label="Price"
          type="text"
          variant="standard"
        />
        <br />
        
        <TextField
          required
          onChange={(e) => setRoomAdminEmail(e.target.value)}
          label="Admin Email"
          type="email"
          variant="standard"
         
        />
        <br />
        <TextField
          required
          onChange={(e) => setRatting(e.target.value)}
          label="Your Room Ratting"
          type="numbew"
          variant="standard"
         
        />
        <br />
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Upload
        </Button>
      </form>
  </Grid>
  <Grid item xs={6}>
   <img src={room} className="img-fluid pe-2" style={{height:'400px', width:'450px'}} alt="" />
  </Grid>
  
</Grid>
      
    </div>
  );
};

export default AddRoom;
