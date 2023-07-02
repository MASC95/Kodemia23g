import Dropdown from "react-bootstrap/Dropdown";
//import './CustomDropDown.css';

const CustomDropDown = () => {
  return (
    <Dropdown className="px-5 mt-2">
      <Dropdown.Toggle id="dropdown-basic" className="boton-inicio">
        Iniciar Sesión
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login-recruiter">Soy Reclutador</Dropdown.Item>
        <Dropdown.Item href="/login-candidato">Soy Candidato</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropDown;
