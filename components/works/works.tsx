import React from "react";
import { Card, Container, Col, Row, Carousel } from "react-bootstrap";
import Img from "next/image";
import comingsoon from "../../assets/comingsoon.png";
const Works = () => {
  return (
    <Container className="works">
      <Row>
        <div className="name">
          <p>Mindev Solution</p>
        </div>
        <div className="label">
          <h2>Our Works</h2>
        </div>
      </Row>
      <Carousel fade>
        <Carousel.Item>
          <Row>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>

            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <Card>
                <div className="img">
                  <Img src={comingsoon} />
                </div>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Works;
