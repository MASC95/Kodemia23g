import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../Recruiter/assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaUser,
  FaSuitcase,
  FaCode,
  FaSignOutAlt,
  FaHome,
  FaCheckDouble,
} from "react-icons/fa";
import useJob from "../../../../hooks/useJob";
import "../style.scss";

function OffCanvasRecruiter({ showOffcanvas, handleShowOffcanvas }) {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const navigate = useNavigate();
  // const logout = (e) => {
  //   setDataLocalStorage({});
  //   setDataCandidate({});
  //   setDataRecruiter({});
  //   navigate("/");
  // };
  const logout = (e) => {
    Swal.fire({
      title:'Estas Seguro de Cerrar Sesión',
      confirmButtonText:'Cerrar Sesión',
      confirmButtonColor:'green',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      cancelButtonColor:'red',
      icon:'warning',
      }).then((result) => {
      if (result.isConfirmed) {
        setDataLocalStorage({});
        setDataCandidate({});
        setDataRecruiter({});
        navigate("/");
      }
    });
  };
  return (
    <>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleShowOffcanvas}
        className="off-canvas"
      >
        <Offcanvas.Header closeButton className=" canvas-header">
          <Link to={"index.html"} className="logo-jobinder d-flex justify-content-center align-items-center w-100">
            <img
              src={logo}
              className="img-jobinder"
              alt="logoJobinder"
              style={{ width: "150px", height: "50px", margin: "50px 0 50px" }}
            />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="canvas-body">
          <div
            onClick={handleShowOffcanvas}
            className="d-flex flex-column columns"
          >
            <Link to={`/Dashboard-Recruiter/home`} className="link d-none">
              <FaHome className="icons" />
              <span className="text">Inicio</span>
            </Link>
            <Link to={`/Dashboard-Recruiter/profile`} className="link">
              <FaUser className="icons" /> <span className="text">Perfil</span>
            </Link>
            {/* <Link to={`/Dashboard-Recruiter/softskill-addNew`} className="link">
              <FaCode className="icons" />{" "}
              <span className="text">Skills</span>
            </Link> */}
            <Link to={`/Dashboard-Recruiter/vacancy`} className="link">
              <FaSuitcase className="icons" />{" "}
              <span className="text">Vacantes</span>
            </Link>
            <Link to={`/Dashboard-Recruiter/match`} className="link">
              <FaCheckDouble className="icons" />{" "}
              <span className="text">Aplicantes</span>
            </Link>
            <div className="link">
              <span type="submit" onClick={logout} className=" link">
                <FaSignOutAlt className="icons" />
                <span className="text">Cerrar Sesión</span>
              </span>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasRecruiter;
