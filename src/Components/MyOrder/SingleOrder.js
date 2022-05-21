import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import mainCss from "../MyOrder/MyOrder.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const confirm = Modal.confirm;
const SingleOrder = ({ booking, bookingLength }) => {
  const [status,setStatus] = useState({});
  console.log("Booking Length", bookingLength);

  function showDeleteConfirm(id) {
    confirm({
      title: "Are you sure delete Booking Order?",
      content: "Please Booking Another Tour",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deletePost(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  useEffect(() => {
    fetch("http://localhost:5000/bookingorder")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
      });
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:5000/bookingorder/delete/${id}/`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <div className="col-md-4 p-2 shadow-2 db" style={mainCss}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Tour Place {booking.placeName} </Card.Title>

          <Card.Text>
            <p>Tourist Name: {booking.name}</p>
            <p>Tour Amount:{booking.amount}</p>
            <p>Tourist Email :{booking.userEmail}</p>
            <p>
              From {booking.from} to {booking.placeName}
            </p>
          </Card.Text>
            {
              status.isPaid===true ?( <p>Paid </p>):
              (<p>Pending</p>)
            }
          <NavLink to={`/singlePackge/${booking._id}`}>
            <Button>Details</Button>
          </NavLink>
          <Button onClick={() => showDeleteConfirm(booking._id)} type="dashed">
            Delete Booking
          </Button>
          {/* <Button variant="primary" onClick={()=>showDeleteConfirm(booking._id)}>Remove Booking</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleOrder;
