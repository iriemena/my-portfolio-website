import React, { useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

function NavBar() {
  const nav = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    const att = e.target.getAttribute("href");
    let doc = document.getElementById(att);
    const Navheight = nav.current.getBoundingClientRect().height;
    const position = doc.offsetTop - Navheight;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <AppBar>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="nav-bar"
        >
          <Container>
            <Navbar.Brand ref={nav}>
              <img
                className="d-inline-block align-top"
                src="/images/fortune.png"
                alt="fortune"
                width="50"
                height="50"
              />
            </Navbar.Brand>
            <Toolbar>
              <Typography
                variant="p"
                component="h1"
                color="primary"
                className="hidden"
              >
                FOR<span style={{ borderBottom: "3px solid pink" }}>T</span>UNE
              </Typography>
            </Toolbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" onClick={handleClick}>
                <Nav.Link href="home" id="home">
                  HOME
                </Nav.Link>
                <Nav.Link href="about">ABOUT</Nav.Link>
                <Nav.Link href="project">PROJECTS</Nav.Link>
                <Nav.Link href="contact">CONTACT</Nav.Link>
              </Nav>
              <Nav className="blog">
                <Nav.Link
                  onClick={
                    () => window.open("https://github.com/iriemena/question")
                    // (window.location.href =
                    //   "https://github.com/iriemena/question")
                  }
                >
                  BLOG
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </AppBar>
      {/* <Explore nav={nav} /> */}
    </div>
  );
}

export default NavBar;
