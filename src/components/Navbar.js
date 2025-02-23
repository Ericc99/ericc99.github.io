import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { HiAcademicCap } from "react-icons/hi";
import { HiMiniCamera } from "react-icons/hi2";
import logo from "../Assets/logo.png"

import {
  AiOutlineHome,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/haozhe-cui-36a860171/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> LinkedIn
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://scholar.google.com/citations?user=BEaJnt8AAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                <HiAcademicCap style={{ marginBottom: "2px" }} /> Scholar
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/gallery"
                    onClick={() => updateExpanded(false)}
                >
                    <HiMiniCamera style={{ marginBottom: "2px" }} /> Gallery
                </Nav.Link>
                </Nav.Item>       
            </Nav>

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Ericc99"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="hcuiad@connect.ust.hk"
                target="_blank"
                className="fork-btn-inner"
              >
                <MdEmail style={{ fontSize: "1.2em" }} />{" "}
              </Button>
            </Nav.Item> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
