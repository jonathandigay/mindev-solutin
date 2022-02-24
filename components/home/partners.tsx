import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "next/image";
import logo from "../../assets/mindev.png";
const Partners = () => {
  return (
    <Container className="main-partners">
      <Row data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <div className="name">
          <p>Mindev Solution</p>
        </div>
        <div className="position">
          <h1>Partners with</h1>
        </div>
      </Row>
      <Row>
        <Col>
          <div className="partners">
            <div className="slides">
              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>

              <div className="slide">
                <Img src={logo} alt="partner" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Partners;
