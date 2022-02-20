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
          <Image src={bg} />
        </div>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
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
          <Col>
            <Card style={{ width: "18rem" }}>
              <div className="img">
                <Image src={logo} alt="pic" />
                <Image src={logo} />
              </div>
              <Card.Title>Dynamic Website</Card.Title>
              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                facilis vitae adipisci harum omnis natus at
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
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
