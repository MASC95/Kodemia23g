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
import useJob from '../../../../hooks/useJob' 
 const NavbarCandidate = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]= useJob();
  console.log('dataCandidate...', dataCandidate)
  console.log('dataRecruiter...', dataRecruiter)
  const handleShowOffCanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

 
  return (
    <Navbar expand="lg" className="nav w-100">
      <Container className="container-fluid">
     
      
      
        
        <Button variant="primary" onClick={handleShowOffCanvas} className="toggle">
          <FaBars />
        </Button>

        <OffCanvasCandidate
          showOffcanvas={showOffcanvas}
          handleShowOffcanvas={handleShowOffCanvas}
        />

<Navbar.Brand href="#home" className="logo">
          {" "}
          <img
            src={logo}
            alt="Logo"
            
            className="logo-img"
          />{" "}
        </Navbar.Brand>
        <div className="container">
          <p>{`${dataCandidate.name} ${dataCandidate.last_name}`} </p>
          <img src={dataCandidate.avatar_url} alt="candidate-profile-pic"/> 
        </div>

     
      </Container>
    </Navbar>
  );
}

export default NavbarCandidate;
