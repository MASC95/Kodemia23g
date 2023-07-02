import Dropdown from "react-bootstrap/Dropdown";
//import './CustomDropDown.css';

const CustomDropDown = () => {
  return (
    <Dropdown className="px-5">
      <Dropdown.Toggle id="dropdown-basic" variant="success">
        Iniciar Sesion
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login-recruiter">Soy Reclutador</Dropdown.Item>
        <Dropdown.Item href="/login-candidato">Soy Candidato</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropDown;
