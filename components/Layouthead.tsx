import React, { useState } from "react";
import {
  Col,
  Container,
  Navbar,
  Row,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import mindevlogo from "../assets/mindevtran.png";
import { useRouter } from "next/router";
import Link from "next/link";
const Layouthead = () => {
  const path = useRouter().asPath;
  const [isNav, setIsNav] = useState<boolean>(false);

  const Navigation = () => {
    setIsNav(!isNav);
  };

  return (
    <Container className="mindev_header" fluid>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <Image src={mindevlogo} alt="mindev logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bars"
          onClick={Navigation}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`nav-hide ${isNav && "nav-show"}`}
        >
          <Form className="d-flex search">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <i className="fas fa-search"></i>
            </Button>
          </Form>
          <ul className="navigations">
            <li
              className={`navigation ${path === "/" && "active"}`}
              onClick={Navigation}
            >
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li
              className={`navigation ${path === "/works" && "active"}`}
              onClick={Navigation}
            >
              <Link href="/works">
                <p>Works</p>
              </Link>
            </li>
            <li
              className={`navigation ${path === "/services" && "active"}`}
              onClick={Navigation}
            >
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li
              className={`navigation ${path === "/about" && "active"}`}
              onClick={Navigation}
            >
              <Link href="/about">
                <p>About us</p>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
        <div className="contact">
          <button>Contact Us</button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Layouthead;
