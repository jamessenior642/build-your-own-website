import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './CustomNavbar.css'; // Ensure this file is imported

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);

  return (
    <Navbar fixed="top" expand="lg" bg="light" variant="light" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">
          <h3 className="spinningname" id="name" style={{ fontFamily: 'Merriweather', fontSize: '25px', margin: '0' }}>JS</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="about"
                smooth={true}
                duration={0}
                className="nav-link"
                spy={true}
                activeClass="active"
                onClick={handleSelect}
              >
                about
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="projects"
                smooth={true}
                duration={0}
                className="nav-link"
                spy={true}
                activeClass="active"
                onClick={handleSelect}
              >
                projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="workhistory"
                smooth={true}
                duration={0}
                className="nav-link"
                spy={true}
                activeClass="active"
                onClick={handleSelect}
              >
                experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                as={Link}
                to="music"
                smooth={true}
                duration={0}
                className="nav-link"
                spy={true}
                activeClass="active"
                onClick={handleSelect}
              >
                music
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
