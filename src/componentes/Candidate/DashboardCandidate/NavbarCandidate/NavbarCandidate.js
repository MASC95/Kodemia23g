import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import OffCanvasCandidate from "../OffCanvasCandidate/OffCanvasCandidate";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import logo from "../../../Recruiter/assets/img/logo.png";
import logoSmall from "../../../Candidate/img/logoSmall-removebg-preview.png";
import "./navbarcandidate.scss";
import { FaUserCircle, FaBell, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useJob from "../../../../hooks/useJob";

import {
  OverlayTrigger,
  Tooltip,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavbarCandidate = () => {
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  const [isErrorImg, setIsErrorImg] = useState(false);

  useEffect(() => {
    console.log("Reloading Navbar:...");
  }, [isErrorImg]);

  const toggleErrorImg = () => {
    setIsErrorImg((prev) => !prev);
  };

  const handleError = () => {
    console.log("Error al cargar la Imagen:...");
    toggleErrorImg();
  };

  const handleLoad = () => {
    console.log("Imagen cargada con exito:...");
    //toggleErrorImg();
  };
  const placement = "bottom";
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    console.log("Muestrame el DropDown:...");
    setShowDropdown((prev) => !prev);
  };

  const handleDropdownSelect = (eventKey) => {
    console.log("opción seleccionada:", eventKey);
  };
  // console.log("dataCandidate...", dataCandidate);
  // console.log("dataRecruiter...", dataRecruiter);}

  const handleShowOffCanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

  const logout = () => {
    setDataLocalStorage({});
    setDataCandidate({});
    setDataRecruiter({});
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav w-100 main-navbar-color">
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
          <img
            src={logoSmall}
            width={"50px"}
            alt="Logo"
            className="d-flex d-md-none justify-content-start rounded"
          />
          <img
            src={logo}
            alt="Logo"
            className="d-none logo-img d-md-flex justify-content-start"
          />{" "}
        </Navbar.Brand>
        <OffCanvasCandidate
          showOffcanvas={showOffcanvas}
          handleShowOffcanvas={handleShowOffCanvas}
        />

        <div className="container-m1 d-flex justify-content-end">
          <p className="user-data ">
            {" "}
            <span className="d-none d-md-block ">
              {dataCandidate.name && dataCandidate.last_name
                ? `${dataCandidate.name} ${dataCandidate.last_name}`
                : dataCandidate.name || dataCandidate.last_name
                ? dataCandidate.name || dataCandidate.last_name
                : `${dataCandidate.email}`}
            </span>
          </p>

          <OverlayTrigger
            style={{ cursor: "pointer" }}
            placement={placement}
            overlay={
              <Tooltip
                className={showDropdown ? "d-none" : ""}
                id={`tooltip-${placement}`}
              >
                Welcome Back! {dataCandidate.email}
              </Tooltip>
            }
          >
            <div>
              {dataCandidate?.avatar_url ? (
                <img
                  src={
                    dataCandidate.avatar_url ? dataCandidate.avatar_url : logo
                  }
                  alt="candidate-profile-pic"
                  className="candidate-profile-pic "
                  onError={handleError}
                  onLoad={handleLoad}
                  onClick={handleDropdownToggle}
                />
              ) : (
                <FaUserCircle
                  className="candidate-profile-icon"
                  onClick={handleDropdownToggle}
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#FFF",
                    marginLeft: "30px",
                    cursor: "pointer",
                  }}
                />
              )}

              {showDropdown && (
                <Dropdown.Menu
                  show={showDropdown}
                  align="end"
                  onSelect={handleDropdownSelect}
                  style={{
                    background: "rgba(119, 197, 229, 0.13)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(119, 197, 229, 0.3)",
                  }}
                >
                  <Dropdown.Item
                    eventKey="opcion1"
                    style={{
                      color: "#498BA6",
                      fontFamily:
                        "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                    }}
                    as={Link}
                    to="/dashboard-candidato/profile"
                  >
                    <FaUser /> Mi Cuenta
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="opcion2"
                    style={{
                      color: "#498BA6",
                      fontFamily:
                        "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                    }}
                    onClick={logout}
                  >
                    <FaSignOutAlt /> Cerrar Sesión
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="opcion3"
                    style={{
                      color: "#498BA6",
                      fontFamily:
                        "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                    }}
                  >
                    <FaBell className="animate__animated animate__headShake" />{" "}
                    Notificaciones
                  </Dropdown.Item>
                </Dropdown.Menu>
              )}
            </div>
          </OverlayTrigger>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarCandidate;
