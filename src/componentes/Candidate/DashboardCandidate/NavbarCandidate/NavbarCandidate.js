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
import { FaUserCircle } from "react-icons/fa";
import useJob from "../../../../hooks/useJob";
const NavbarCandidate = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  // console.log("dataCandidate...", dataCandidate);
  // console.log("dataRecruiter...", dataRecruiter);
  const handleShowOffCanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

  return (
    <Navbar expand="lg" className="nav w-100">
      <Container className="container-fluid contenedor">
       
        <Navbar.Brand href="#home" className="logo d-flex gap-2">
          {" "}
          <Button
          variant="primary"
          onClick={handleShowOffCanvas}
          className="toggle d-flex justify-content-center align-items-center "
        >
          <FaBars />
        </Button>
          <img src={logo} alt="Logo" className="logo-img d-flex justify-content-start" />{" "}
        </Navbar.Brand>
        <OffCanvasCandidate
          showOffcanvas={showOffcanvas}
          handleShowOffcanvas={handleShowOffCanvas}
        />

        
        <div className="container-m1 d-flex justify-content-end">
          <p className="user-data ">
            {" "}
            <p className="d-none d-sm-block ">
              {dataCandidate.name && dataCandidate.last_name
                ? `${dataCandidate.name} ${dataCandidate.last_name}`
                : dataCandidate.name || dataCandidate.last_name
                ? dataCandidate.name || dataCandidate.last_name
                : `${dataCandidate.email}`}
            </p>
          </p>
          
          {dataCandidate.avatar_url ? (
              <img src={dataCandidate.avatar_url} alt="candidate-profile-pic" className="candidate-profile-pic " />
            ) : (
              <FaUserCircle className="candidate-profile-icon" style={{width: '40px', height: '40px', color: '#FFF', marginLeft:'30px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'}} />
            )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarCandidate;
