import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button2 from "../../../Candidate/Buttons/Button2";
import { Link } from "react-router-dom";

const CustomDropDown = () => {
  return (
    <>
      <Dropdown className="px-3">
        <Dropdown.Toggle
          as="div"
          className="button-2"
          style={{
            width: "100px",
            fontSize: "10px",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          Iniciar sesión
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/login-recruiter">Soy Reclutador</Dropdown.Item>
          <Dropdown.Item href="/login-candidato">Soy Candidato</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Utilizamos el componente Button2 y pasamos las mismas propiedades que al primer botón */}
      <Dropdown className="d-none d-md-block">
        <Dropdown.Toggle
          as="div"
          className="button-2"
          style={{
            width: "100px",
            fontSize: "10px",
            padding: "12px",
            cursor: "pointer",
            color: "#f2f2f2",
            backgroundColor: "#093040",
          }}
        >
          Registrarse
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="register-recruiter">
            Soy Reclutador
          </Dropdown.Item>
          <Dropdown.Item href="register-candidato">Soy Candidato</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CustomDropDown;
