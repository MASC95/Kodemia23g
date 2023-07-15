import React from "react";
import Accordion from "react-bootstrap/Accordion";
const FAQSection = () => {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Como creo una cuenta en Jobinder?</Accordion.Header>
        <Accordion.Body>
          "Para crear una cuenta en Jobinder, simplemente sigue estos pasos: 1.
          Visita nuestro sitio web en https://web.jobinder.org/. 2. Haz clic en
          el botón 'Registrarse' en la esquina superior derecha. 3. Completa el
          formulario de registro con tus datos personales y de contacto. 4. Haz
          clic en 'Crear cuenta' y ¡listo! Tu cuenta en Jobinder estará creada y
          podrás comenzar a utilizarla.",
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQSection;
