import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import OffCanvasCandidate from "../OffCanvasCandidate/OffCanvasCandidate";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import logo from "../../../Recruiter/assets/img/logo.png";
import "./navbarcandidate.scss";
function NavbarCandidate() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffCanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

 
  return (
    <Navbar expand="lg" className="nav">
      <Container className="container">
     
        <Navbar.Brand href="#home" className="logo">
          {" "}
          <img
            src={logo}
            alt="Logo"
            
            className="logo-img"
          />{" "}
        </Navbar.Brand>
      
        {/* <Navbar.Toggle onClick={handleShowOffCanvas} aria-controls="basic-navbar-nav" /> */}
        <Button variant="primary" onClick={handleShowOffCanvas} className="toggle">
          <FaBars />
        </Button>

        <OffCanvasCandidate
          showOffcanvas={showOffcanvas}
          handleShowOffcanvas={handleShowOffCanvas}
        />

        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavbarCandidate;