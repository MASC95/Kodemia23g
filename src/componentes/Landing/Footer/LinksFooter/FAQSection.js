import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FAQSection = () => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            ¿Qué es Jobinder?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Jobinder es una aplicación que conecta a candidatos y reclutadores
            en el ámbito laboral, facilitando la búsqueda de empleo y la
            contratación de talentos.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            ¿Cómo puedo utilizar Jobinder?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Puedes utilizar Jobinder creando una cuenta de usuario como
            candidato o reclutador. Como candidato, podrás buscar empleo,
            aplicar a vacantes, grabar un video de presentación y cargar tu
            currículum vitae. Como reclutador, podrás publicar vacantes, buscar
            talentos y gestionar procesos de selección.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            ¿Jobinder garantiza la obtención de empleo?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Jobinder hace todo lo posible para proporcionar ofertas de empleo
            relevantes y oportunidades de carrera basadas en tus habilidades de
            programación. Sin embargo, no se garantiza la obtención de empleo,
            ya que la decisión final de contratación depende de los empleadores.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            ¿Cómo protege Jobinder mi privacidad y mis datos personales?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            Jobinder se compromete a proteger tu privacidad y procesar tus datos
            personales de acuerdo con las leyes aplicables. Consulta la Política
            de Privacidad de Jobinder para obtener información detallada sobre
            cómo se recopilan, utilizan y protegen tus datos personales.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default FAQSection;
