import React, { useEffect } from "react";
import { Carousel, Col, Container, Row, Card } from "react-bootstrap";
import Img from "next/image";
import me from "../../assets/me.png";
const Testimonial = () => {
  return (
    <Container className="testimonial" fluid>
      <Row style={{ overflow: "hidden" }}>
        <Col md={6}>
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <Card>
                <div className="img">
                  <Img src={me} alt="costumer" />
                </div>

                <div className="name">
                  <h3>Costumer one</h3>
                </div>
                <div className="position">
                  <p>business man one</p>
                </div>
                <Card.Body>
                  <p>
                    {" "}
                    explicabo cupiditate iusto quos animi! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Suscipit voluptatum
                    doloribus, voluptas dolore aut rerum
                  </p>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <Card>
                <div className="img">
                  <Img src={me} alt="costumer" />
                </div>
                <div className="name">
                  <h3>Costumer three</h3>
                </div>
                <div className="position">
                  <p>business man three</p>
                </div>
                <Card.Body>
                  <p>
                    et consectetur adipisicing elit. Suscipit voluptatum
                    doloribus, voluptas dolore aut rerum explicabo cupiditate
                    iusto quos animi!
                  </p>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <Card>
                <div className="img">
                  <Img src={me} alt="costumer" />
                </div>

                <div className="name">
                  <h3>Costumer two</h3>
                </div>
                <div className="position">
                  <p>business man two</p>
                </div>
                <Card.Body>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit volure aut rerum explicabo cupiditate iusto quos
                    animi!
                  </p>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md={6} data-aos="fade-left" data-aos-anchor-placement="top-bottom">
          <div>
            <h1>Our Company Feedbacks</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              veniam nisi iure hic nostrum quisquam voluptas nulla, error
              temporibus assumenda magni a vitae illum, adipisci eius eos
              maiores id cupiditate porro eveniet obcaecati corporis cum.
              Facilis officiis
              <br />
              hic numquam animi voluptatum provident similique accusantium
              pariatur cum dolorem? Adipisci, sapiente ullam! Alias similique
              labore ullam aliquam officiis dolorum inventore necessitatibus
              <br />
              voluptatibus numquam error, molestias eius nulla explicabo nostrum
              sunt atque? Magnam repellendus architecto, laborum debitis ex
              explicabo a. Distinctio molestias veniam eligendi aliquid
              aspernatur iure neque, iste recusandae nisi in modi debitis
              consequuntur ut laboriosam veritatis quod at sint minima
              voluptatibus?
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
