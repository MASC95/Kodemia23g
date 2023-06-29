import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../Recruiter/assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaSuitcase,
  FaCode,
  FaSignOutAlt,
  FaHome,
  FaCheckDouble
} from "react-icons/fa";
import useJob from "../../../../hooks/useJob";
import "../style.scss";

function OffCanvasRecruiter({ showOffcanvas, handleShowOffcanvas }) {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    initDataCandidate,
    initDataRecrutier,
  ] = useJob();
  const navigate = useNavigate();
  const logout = (e) => {
    window.localStorage.setItem("accessToken", "");
    setDataCandidate(initDataCandidate);
    setDataRecruiter(initDataRecrutier);
    navigate("/");
  };
  return (
    <>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleShowOffcanvas}
        className="off-canvas"
      >
        <Offcanvas.Header className="d-flex justify-content-center align-items-center canvas-header">
          <Link to={"index.html"} className="logo-jobinder">
            <img
              src={logo}
              className="img-jobinder"
              alt="logoJobinder"
              style={{ width: "150px", height: "50px", margin: "50px 0 50px" }}
            />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="canvas-body">
          <div onClick={handleShowOffcanvas} className="d-flex flex-column columns">
            <Link to={`/Dashboard-Recruiter/home`} className="link">
              <FaHome className="icons" />
              <span className="text">Home</span>
            </Link>
            <Link to={`/Dashboard-Recruiter/profile`} className="link">
              <FaUser className="icons" /> <span className="text">Perfil</span>
            </Link>
            <Link to={`/Dashboard-Recruiter/softskill-addNew`} className="link">
              <FaCode className="icons" />{" "}
              <span className="text">Skills</span>
            </Link>
            <Link to={`/Dashboard-Recruiter/vacancy`} className="link">
              <FaSuitcase className="icons" />{" "}
              <span className="text">Vacantes</span>
            </Link>
            <Link to={`/Dashboard-Recruiter/match`} className="link">
              <FaCheckDouble className="icons" />{" "}
              <span className="text">Match</span>
            </Link>
            <div className="link">
              <span
                type="submit"
                onClick={logout}
                className=" link"
              >
                <FaSignOutAlt className="icons" />
                <span className="text">Log Out</span>
              </span>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasRecruiter;