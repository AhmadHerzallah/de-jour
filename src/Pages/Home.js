import React from "react";
import "../assets/css/home.css";
import { Container, Row, Col } from "react-grid-system";
import { setConfiguration } from "react-grid-system";

setConfiguration({ maxScreenClass: "xl" });

const Home = () => {
  return (
    <Container>
      <div className="home">
        <h1>Home</h1>
        <p>Home</p>
      </div>
    </Container>
  );
};

export default Home;
