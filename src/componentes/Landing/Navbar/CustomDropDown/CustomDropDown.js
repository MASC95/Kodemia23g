import Dropdown from 'react-bootstrap/Dropdown';
//import './CustomDropDown.css';


const CustomDropDown = () => {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Iniciar Sesion
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="/login-recruiter">Soy Reclutador</Dropdown.Item>
        <Dropdown.Item href="/login-candidato">Soy Candidato</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CustomDropDown