import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Techimages } from "../../tech";
import Img from "next/image";
const Tech = () => {
  return (
    <Container
      className="techs"
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
    >
      <Row>
        <Col>
          <h3>Mindev Technologies</h3>
          <Card style={{ maxWidth: "45rem", margin: "auto" }}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              dignissimos cum veritatis sequi repellendus, amet possimus
              corporis soluta voluptatibus harum, repudiandae aut modi. Eligendi
              debitis, et est doloremque ullam enim?
            </p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="techs">
          {Techimages.map((tech, i) => {
            return (
              <div className="tech" key={i}>
                <Img src={tech.img} alt={tech.name} />
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Tech;
