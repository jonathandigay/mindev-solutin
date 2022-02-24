import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import bg from "../../assets/curvebg.png";
import webdesign from "../../assets/webdesign.png";
import frontend from "../../assets/frontend.png";
import fullstack from "../../assets/fullstack.png";

const Services = () => {
  return (
    <>
      <Container className="services-cards" fluid>
        <div className="bg">
          <Image src={bg} alt="pic" />
        </div>

        <Row data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Col md={4} sm={6}>
            <Card>
              <div className="img">
                <Image src={webdesign} alt="webdesign" />
              </div>
              <Card.Title>Web Design</Card.Title>
              <Card.Body>
                We Designing an minimalist user freindly UI/UX and innovative
                design
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card>
              <div className="img">
                <Image src={frontend} alt="frontend" />
              </div>
              <Card.Title>Frontend Development</Card.Title>
              <Card.Body>
                We create and optimize Responsive web user interface and also
                the minmalist creature of web base system
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <div className="img">
                <Image src={fullstack} alt="fullstack" />
              </div>
              <Card.Title>Fullstack Development</Card.Title>
              <Card.Body>
                From minimalist built in web based system to dynamic using the
                new technology and efficient
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
