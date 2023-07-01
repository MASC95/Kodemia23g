import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../Recruiter/assets/img/logo.png";
import LoginCandidate from "../../Candidate/LoginCandidate/LoginCandidate";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const cambiar = useNavigate();
  const roleSelection = (role) => {
    console.log("Selected Role", selectedRole);
    //SI seleccionas candidato entonces te manda al login para candidato si seleccionas reclutador te manda al login de reclutador
    if (role === "candidato") {
      //Cambio de ruta a login candidatos
      cambiar("/login-candidato");
    } else if (role === "reclutador") {
      cambiar("/login-recruiter");
    }
  };

  return (
    <div className="father-container">
      <nav className="navbar navbar-expand-lg ">
        <div className="nav-container container-fluid justify-content-between">
          <div className="column-logo col-lg-3">
            <Link
              className="link-job navbar-brand me-2 mb-1 sd-flex align-items-center"
              to="/"
            >
              <img
                src={logo}
                alt="jobinder-logo"
                className="jobinder-logo"
                style={{ width: "120px ", height: "45px" }}
              ></img>
            </Link>
          </div>
        </div>
        <Dropdown className="m-4">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Iniciar Sesión
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => roleSelection("candidato")}>
              Accede como Candidato
            </Dropdown.Item>
            <Dropdown.Item onClick={() => roleSelection("reclutador")}>
              Accede como Reclutador
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
};

export default Navbar;
