import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import OffCanvasRecruiter from "./OffCanvasRecruiter/OffCanvarRecruiter";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import logo from "../../Recruiter/assets/img/logo.png";

function NavbarRecruiter() {
  const style={
    width:'150px',
    height:'50px'
  }
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
            style={style}
            src={logo}
            alt="Logo"
            className="logo-img"
          />{" "}
        </Navbar.Brand>
        <Button variant="primary" onClick={handleShowOffCanvas} className="toggle">
        <img 
            style={style}
            src={logo}
            alt="Logo"
            className="logo-img"
          />{" "}
          <FaBars />
        </Button>
        <OffCanvasRecruiter
          showOffcanvas={showOffcanvas}
          handleShowOffcanvas={handleShowOffCanvas}
        />
      </Container>
    </Navbar>
  );
}
export default NavbarRecruiter