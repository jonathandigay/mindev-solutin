import type { NextPage } from "next";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/blogs/sidebar";
import Wall from "../components/blogs/wall";
import Img from "next/image";
import bg from "../assets/technews.png";
const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mindev Solution | blogs</title>
        <meta name="description" content="mindev solution blogs" />
        <link rel="icon" href="/mbg.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Container fluid className="blogs">
        <Row className="hero">
          <div className="bg">
            <Img src={bg} alt="bg" />
          </div>
          <div className="overlay"></div>
          <div className="label">
            <h3>Mindev Solution</h3>
            <h1>Mindev Daily news</h1>
          </div>
        </Row>
        <Row className="blogs-wrapper">
          <Col md={8} className="wall">
            <Wall />
          </Col>

          <Col md={4} className="sidebar">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
