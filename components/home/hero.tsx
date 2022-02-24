import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Img from "next/image";
import herobg from "../../assets/herobg.jpg";
import { useToogleContext } from "../../context/toogler";
const Hero = () => {
  const { isContact, setIsContact } = useToogleContext();

  const isContactModal = () => {
    setIsContact(!isContact);
  };

  return (
    <Container className="main-hero" fluid>
      <div className="bg">
        <Img src={herobg} />
      </div>
      <div className="overlay"></div>
      <Row>
        <Col className="descriptions mb-5" lg={6}>
          <div className="intro-name">
            <h3> We are Mindev Solution</h3>
          </div>
          <div className="intro-description">
            <h1>
              Create Costum &
              <br />
              Reliable in Software <br />
              Developement
            </h1>
          </div>
          <div className="intro-dev">
            <p>Were you found the Minimalist Developer out there</p>
          </div>
          <div className="book">
            <button onClick={isContactModal}>Book now</button>
          </div>
        </Col>
        <Col className="youtube" lg={6}>
          <div className="yt">
            <iframe
              src="https://www.youtube.com/embed/zL1gMeoN8bI"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
