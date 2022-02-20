import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Objective = () => {
  return (
    <Container className="objective" fluid>
      <Row>
        <Col>
          <div className="label">
            <h1>WHY MINDEV SOLUTION ?</h1>
          </div>
          <Card style={{ width: "40rem" }}>
            <Card.Body>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis quo quis officiis dolor dolorum, molestiae eos repellat
              sed quod deserunt, ratione, voluptate accusamus. Ullam ex aliquid
              exercitationem natus at dolores?
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Objective;
