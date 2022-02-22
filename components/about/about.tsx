import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../../assets/me.png";
import Img from "next/image";
const About = () => {
  return (
    <Container className="about">
      <Row className="label">
        <p>Mindev Solution</p>
        <h2>About us / Our story</h2>
      </Row>
      <Row>
        <Col sm={6} className="img-section">
          <div>
            <div className="img">
              <Img src={me} alt="me" />
            </div>
            <div className="photo-label">
              <h3>Jonathan Digay</h3>
              <p>CEO / FOUNDER</p>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="label">
            <h1>Mindev Solution</h1>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              nihil natus, eveniet illo consectetur pariatur dignissimos
              corrupti dolor dolorem quasi cumque optio facilis quo accusantium
              asperiores. Numquam, autem eius facere totam inventore aliquid
              unde veritatis odio hic rem quam aut, voluptate quas iure quis id
              dolores suscipit ex, aspernatur repellat. Adipisci natus suscipit
              quam iusto quae, maiores facilis ea quis sit sed repudiandae minus
              ut, velit quibusdam accusamus dolore sunt quos laborum asperiores
              et. Atque fuga, amet recusandae laudantium nisi, sed quia, ipsam
              cumque perferendis architecto ut modi nemo inventore. Amet maiores
              quae quo assumenda sunt accusantium cupiditate eum voluptate!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
