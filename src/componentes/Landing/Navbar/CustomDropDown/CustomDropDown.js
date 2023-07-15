import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button2 from "../../../Candidate/Buttons/Button2";
import { Link } from "react-router-dom";
const CustomDropDown = () => {
  return (
    <>
      <Dropdown className="px-3 ">
        <Dropdown.Toggle
          as="div"
          className="button-2"
          style={{
            width: "100px",
            fontSize: "10px",
            padding: "12px",
          }}
        >
          iniciar sesion
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/login-recruiter">Soy Reclutador</Dropdown.Item>
          <Dropdown.Item href="/login-candidato">Soy Candidato</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Link to="/register-candidato" className="d-none d-md-block">
        <Button2
          text="Registrarse"
          paddingB="12px"
          widthB="100px"
          fs="10px"
          bgcolor="#093040"
          borde="#093040"
          colortext="#f2f2f2"
        />
      </Link>
    </>
  );
};

export default CustomDropDown;
