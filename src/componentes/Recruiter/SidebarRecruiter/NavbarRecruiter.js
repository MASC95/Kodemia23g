import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import OffCanvasRecruiter from "./OffCanvasRecruiter/OffCanvarRecruiter";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import logo from "../../Recruiter/assets/img/logo.png";
import { FaUserCircle, FaBell, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import useJob from "../../../hooks/useJob";
import {
  OverlayTrigger,
  Tooltip,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const NavbarRecruiter = () => {
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
    setShowDropdown(!showDropdown);
  };

  const handleDropdownSelect = (eventKey) => {
    console.log("opción seleccionada:", eventKey);
  };
  // console.log("dataCandidate...", dataCandidate);
  // console.log("dataRecruiter...", dataRecruiter);}

  const handleShowOffCanvas = () => {
    setShowOffcanvas((prev) => !prev);
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
            src={logo}
            alt="Logo"
            className="logo-img d-flex justify-content-start"
          />{" "}
        </Navbar.Brand>
        <OffCanvasRecruiter
          showOffcanvas={showOffcanvas}
          handleShowOffcanvas={handleShowOffCanvas}
        />

        <div className="container-m1 d-flex justify-content-end">
          <p className="user-data ">
            {" "}
            <span className="d-none d-sm-block ">
              {dataRecruiter.name && dataRecruiter.last_name
                ? `${dataRecruiter.name} ${dataRecruiter.last_name}`
                : dataRecruiter.name || dataRecruiter.last_name
                ? dataRecruiter.name || dataRecruiter.last_name
                : `${dataRecruiter.email}`}
            </span>
          </p>

          {dataRecruiter.avatar_url ? (
            <OverlayTrigger
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Welcome Back! {dataRecruiter.email}
                </Tooltip>
              }
            >
              <div>
                <img
                  src={
                    dataRecruiter.avatar_url ? dataRecruiter.avatar_url : logo
                  }
                  alt="candidate-profile-pic"
                  className="candidate-profile-pic "
                  onError={handleError}
                  onLoad={handleLoad}
                  onClick={handleDropdownToggle}
                />
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
                      as={Link}
                      to="/"
                    >
                      <FaSignOutAlt /> Cerrar Sesión
                    </Dropdown.Item>
                    {/* <Dropdown.Item
                      eventKey="opcion3"
                      style={{
                        color: "#498BA6",
                        fontFamily:
                          "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                      }}
                    >
                      <FaBell className="animate__animated animate__headShake" />{" "}
                      Notificaciones
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                )}
              </div>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Welcome Back! {dataRecruiter.email}
                </Tooltip>
              }
            >
              <div>
                <FaUserCircle
                  className="candidate-profile-icon"
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#FFF",
                    marginLeft: "30px",
                  }}
                />
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
                    <Dropdown.Item eventKey="opcion1">
                      <FaSignOutAlt />
                      Cerrar Sesión
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="opcion2">
                      <FaUser />
                      Mi Cuenta
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="opcion3">
                      <FaBell className="animate__animated animate__headShake" />
                      Notificaciones
                    </Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </div>
            </OverlayTrigger>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarRecruiter;
