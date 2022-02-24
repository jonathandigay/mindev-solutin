import React, { useState } from "react";
import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import Image from "next/image";
import mindevlogo from "../assets/mindevtran.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { useToogleContext } from "../context/toogler";
const Layouthead = () => {
  const Route = useRouter();
  const path = Route.asPath;
  const [isNav, setIsNav] = useState<boolean>(false);
  const { isContact, setIsContact } = useToogleContext();
  const [searchvalue, setSearchValue] = useState("");

  const Navigation = () => {
    setIsNav(!isNav);
  };
  const searchOnChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const fetchSearch = (e: any) => {
    e.preventDefault();
    setIsNav(!isNav);
    Route.push(`/search=/${searchvalue}`);
    setSearchValue("");
  };

  const isContactModal = () => {
    setIsContact(!isContact);
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
              onChange={searchOnChange}
              value={searchvalue}
            />
            <Button
              variant="outline-success"
              type="submit"
              onClick={fetchSearch}
            >
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
              className={`navigation ${path === "/blogs" && "active"}`}
              onClick={Navigation}
            >
              <Link href="/blogs">
                <p>Blogs</p>
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
        <div className="contact-btn">
          <button onClick={isContactModal}>Book now</button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Layouthead;
