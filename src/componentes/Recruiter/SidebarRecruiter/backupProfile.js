import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import OffCanvasRecruiter from "./OffCanvasRecruiter/OffCanvarRecruiter";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import logo from "../../Recruiter/assets/img/logo.png";
import imgProfile from "../../Recruiter/assets/img/perfil2.jpg";
import useJob from "../../../hooks/useJob";
import {
  OverlayTrigger,
  Tooltip,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
function NavbarRecruiter() {
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

  const style = {
    width: "150px",
    height: "50px",
  };
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleShowOffCanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };
  const toggleErrorImg = () => {
    setIsErrorImg((prev) => !prev);
  };


  const handleError = () => {
    console.log("Error al cargar la Imagen:...");
    // setIsErrorImg(true);
    toggleErrorImg();
  };

  const handleLoad = () => {
    console.log("Imagen cargada con exito:...");
    // setIsErrorImg(false);
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

  


  return (
    <Navbar expand="lg" className="nav" style={{ backgroundColor: "#78A9BD" }}>
      <Container className="container">
        <Button
          variant="primary"
          onClick={handleShowOffCanvas}
          className="toggle bg-transparent border-0"
        >
          <FaBars />
        </Button>
        <Navbar.Brand href="#home" className="logo ">
          {" "}
          <img style={style} src={logo} alt="Logo" className="logo-img" />{" "}
        </Navbar.Brand>
        <div className="col image-container d-flex justify-content-end g-4">
          <p className="d-none d-sm-block mt-3 text-light">{`${
            dataRecruiter.name ? dataRecruiter.name : dataRecruiter.email
          }`}</p>
          <img
            src={
              dataRecruiter.avatar_url ? dataRecruiter.avatar_url : imgProfile
            }
            onError={handleError}
            onLoad={handleLoad}
            className="rounded-5 m-2"
            style={{ width: "50px", height: "50px" }}
            alt=""
          />
        </div>

        <OffCanvasRecruiter
          showOffcanvas={showOffcanvas}
          handleShowOffcanvas={handleShowOffCanvas}
        />
      </Container>
    </Navbar>
  );
}
export default NavbarRecruiter;
