import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import bg from "../../assets/curvebg.png";
import logo from "../../assets/logo.png";
const Services = () => {
  return (
    <>
      <Container className="services-cards" fluid>
        <div className="bg">
          <Image src={bg} alt="pic" />
        </div>
        <Row>
          <Col md={4} sm={6}>
            <Card>
              <div className="img">
                <Image src={logo} alt="pic" />
              </div>
              <Card.Title>Static Website</Card.Title>
              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                facilis vitae adipisci harum omnis natus at
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card>
              <div className="img">
                <Image src={logo} alt="pic" />
              </div>
              <Card.Title>Dynamic Website</Card.Title>
              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                facilis vitae adipisci harum omnis natus at
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <div className="img">
                <Image src={logo} alt="pic" />
              </div>
              <Card.Title>Static Website</Card.Title>
              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                facilis vitae adipisci harum omnis natus
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
