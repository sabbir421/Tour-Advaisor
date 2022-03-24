import { Button, Input, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

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
      <h1>Add Room </h1>
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
    </div>
  );
};

export default AddRoom;
