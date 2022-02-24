import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "next/image";
import webdesign from "../../assets/webdesign.png";
import Frontend from "../../assets/frontend.png";
import Fullstack from "../../assets/fullstack.png";
const Services = () => {
  return (
    <Container className="services">
      <Row style={{ overflow: "hidden" }}>
        <div className="label">
          <p>Mindev Solution</p>
          <h2>Mindev Services</h2>
        </div>
      </Row>
      <Row style={{ overflow: "hidden" }}>
        <Col
          md={6}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="img">
            <Img src={webdesign} alt="webdesign" />
          </div>
        </Col>
        <Col md={6} data-aos="fade-left" data-aos-anchor-placement="top-bottom">
          <label>
            <h1>Web Design</h1>
          </label>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quidem quae vero possimus vitae et reiciendis quaerat consequuntur
              asperiores magni, voluptates, perspiciatis tenetur rem eligendi
              similique nulla enim repellendus totam. Amet explicabo mollitia
              perspiciatis eveniet aliquid consequuntur excepturi commodi optio
              beatae, eius ipsa repudiandae consectetur quae aut cumque non quo
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ overflow: "hidden" }}>
        <Col
          xs={{ order: "last" }}
          md={{ order: "first", span: 6 }}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
        >
          <label>
            <h1>Frontend Development</h1>
          </label>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quidem quae vero possimus vitae et reiciendis quaerat consequuntur
              asperiores magni, voluptates, perspiciatis tenetur rem eligendi
              similique nulla enim repellendus totam. Amet explicabo mollitia
              perspiciatis eveniet aliquid consequuntur excepturi commodi optio
              beatae, eius ipsa repudiandae consectetur quae aut cumque non quo
            </p>
          </div>
        </Col>
        <Col
          xs={{ order: "first" }}
          md={{ order: "last", span: 6 }}
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="img">
            <Img src={Frontend} alt="Frontend" />
          </div>
        </Col>
      </Row>
      <Row style={{ overflow: "hidden" }}>
        <Col
          md={6}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="img">
            <Img src={Fullstack} alt="Fullstack" />
          </div>
        </Col>
        <Col md={6} data-aos="fade-left" data-aos-anchor-placement="top-bottom">
          <label>
            <h1>Fullstack Decelpment</h1>
          </label>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quidem quae vero possimus vitae et reiciendis quaerat consequuntur
              asperiores magni, voluptates, perspiciatis tenetur rem eligendi
              similique nulla enim repellendus totam. Amet explicabo mollitia
              perspiciatis eveniet aliquid consequuntur excepturi commodi optio
              beatae, eius ipsa repudiandae consectetur quae aut cumque non quo
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
