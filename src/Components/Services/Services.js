import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Servicee/Service";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { Container, Grid } from "@mui/material";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  let [color] = useState("#ffffff");
  useEffect(() => {
    fetch("https://tour-advaisor-server.herokuapp.com/packege")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <Container id="services">
      <h1 className="d-flex justify-content-center text-primary my-3">
        Packege
      </h1>
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <ClipLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 12, sm: 12, md: 11 }}
        >
          {services.map((service) => (
            <Service service={service}></Service>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Services;
