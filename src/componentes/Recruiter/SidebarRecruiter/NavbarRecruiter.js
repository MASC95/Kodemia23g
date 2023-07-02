import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import OffCanvasRecruiter from "./OffCanvasRecruiter/OffCanvarRecruiter";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import logo from "../../Recruiter/assets/img/logo.png";
import useJob from "../../../hooks/useJob";

function NavbarRecruiter() {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  const style = {
    width: "150px",
    height: "50px",
  };
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleShowOffCanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };
  return (
    <Navbar expand="lg" className="nav c-navbar">
      <Container className="container">
        <Button
          variant="primary"
          onClick={handleShowOffCanvas}
          className="toggle bg-transparent border-0"
        >
          <FaBars className="d-flex justify-content-start" />
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
            src={dataRecruiter.avatar_url}
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
