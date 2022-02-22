import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
const Layoutfooter = () => {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col md={4} xs={6} className="column">
          <h3>Mindev Solution</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Workd</li>
            <li>About us</li>
          </ul>
        </Col>
        <Col md={4} xs={6} className="column">
          <h3>Services</h3>
          <ul>
            <li>Web Design</li>
            <li>Frontend Development</li>
            <li>Works</li>
            <li>About us</li>
          </ul>
        </Col>
        <Col md={4} className="column">
          <h3>Contacts</h3>
          <div>
            <div className="socials">
              <div className="social">
                <i className="fas fa-envelope"></i>
              </div>

              <div className="social">
                <i className="fab fa-facebook"></i>
              </div>

              <div className="social">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>

            <p>
              <i className="fas fa-phone"></i> +639517146558
            </p>
          </div>
        </Col>
      </Row>
      <div className="allright">
        <p>all right reserved © 2022</p>
        <p>
          made by :
          <Link href="https://jonathandigay.web.app">Jonathan Digay</Link>
        </p>
      </div>
    </Container>
  );
};

export default Layoutfooter;
