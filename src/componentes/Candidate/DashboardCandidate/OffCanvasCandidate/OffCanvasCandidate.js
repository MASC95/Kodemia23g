import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../Recruiter/assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaUser,
  FaSuitcase,
  FaSearch,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import useJob from "../../../../hooks/useJob";
import "./offcanvascandidate.scss";
function OffCanvasCandidate({ showOffcanvas, handleShowOffcanvas }) {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const navigate = useNavigate();

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
        <Offcanvas.Header closeButton className=" offcanvas-header">
          <Link to={"/"} className="logo-jobinder d-flex justify-content-center align-items-center w-100">
            <img
              src={logo}
              className="img-jobinder"
              alt="logoJobinder"
              style={{ width: "150px", height: "50px", margin: "50px 0 20px" }}
            />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <div
            onClick={handleShowOffcanvas}
            className="d-flex flex-column columns"
          >
            <Link to={`/dashboard-candidato/home`} className="link d-none">
              <FaHome className="icons" />
              <span className="text fs-6">Inicio</span>
            </Link>
            <Link to={`/dashboard-candidato/remote-table`} className="link d-none">
              <FaHome className="icons" />
              <span className="text fs-6">Remote Table</span>
            </Link>
            <Link to={`/dashboard-candidato/profile`} className="link">
              <FaUser className="icons" />{" "}
              <span className="text fs-6">Perfil</span>
            </Link>
            <Link to={`/dashboard-candidato/search`} className="link">
              <FaSearch className="icons" />{" "}
              <span className="text fs-6">Buscar Vacantes</span>
            </Link>
            <Link to={`/dashboard-candidato/app-vacancies`} className="link">
              <FaSuitcase className="icons" />{" "}
              <span className="text fs-6">Mis Vacantes</span>
            </Link>
            <div className="link">
              <button
                type="submit"
                onClick={logout}
                className="button-logout link"
                style={{
                  border: "none",
                  background: "none",
                  color: "inherit",
                  padding: 0,
                  font: "inherit",
                  cursor: "pointer",
                  outline: "inherit",
                }}
              >
                <FaSignOutAlt className="icons" />
                <span className="text fs-6">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCandidate;
