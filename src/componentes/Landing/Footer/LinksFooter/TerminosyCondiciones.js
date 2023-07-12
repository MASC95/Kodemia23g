import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const TerminosCondiciones = () => {
  const [hovered, setHovered] = useState(false);
  const estilo = {
    backgroundImage: "rgba(0, 189, 214, 0.18)",
    borderRadius: "25px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const iconStyle = {
    width: "5vw",
    height: "5vh",
    color: hovered ? "#232ED1 " : "#004BA8",
    backgroundColor: "transparent",
    transition: "transform 0.3s",
    transform: hovered ? "scale(1.2)" : "scale(1)",
    cursor: "pointer",
    opacity: hovered ? "0.7" : "1",
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        backgroundImage: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
        fontFamily: "Poppins",
        color: "#0D324D",
      }}
    >
      <Container className="m-3 p-5" style={estilo}>
        <Link to="/">
          <FaHome
            style={iconStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>

        <h1 className="text-center mb-5 fw-bold">
          Términos y Condiciones de Jobinder
        </h1>

        <p className="mb-3">
          Fecha de entrada en vigor: 23 de Septiembre del 2023
        </p>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">
                1. Aceptación de los Términos y Condiciones
              </span>
            </h2>
            <p className="mx-3">
              Al acceder y utilizar la página web de Jobinder, aceptas y te
              comprometes a cumplir los siguientes términos y condiciones en su
              totalidad. Si no estás de acuerdo con alguno de estos términos,
              por favor, abstente de utilizar la página.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3">
              <span className="">2. Uso de la Página Web</span>
            </h2>
            <h3 className="mb-3">
              <span className="mb-3 mx-3">2.1 Contenido</span>
            </h3>
            <p className="mb-3 mx-3">
              El contenido de la página web de Jobinder, incluyendo pero no
              limitado a texto, gráficos, imágenes, logotipos y software, está
              protegido por derechos de autor y otras leyes de propiedad
              intelectual. No está permitido copiar, modificar, distribuir o
              utilizar dicho contenido sin la autorización expresa por escrito
              de Jobinder.
            </p>

            <h3 className="mb-3 mx-3">
              <span className="">2.2 Cuentas de Usuario</span>
            </h3>
            <p className="mb-3 mx-3">
              Al crear una cuenta de usuario en Jobinder, te comprometes a
              proporcionar información precisa y actualizada. Eres responsable
              de mantener la confidencialidad de tu cuenta y contraseña, y
              aceptas notificar de inmediato a Jobinder cualquier uso no
              autorizado de tu cuenta.
            </p>

            <h3 className="mb-3">
              <span className="mb-3 mx-3 ">2.3 Uso Adecuado</span>
            </h3>
            <p className="mb-5 mx-3">
              Al utilizar la página web de Jobinder, te comprometes a no
              realizar ninguna acción que pueda dañar, deshabilitar o
              sobrecargar la infraestructura de la página, ni interferir en el
              uso y disfrute de otros usuarios. No está permitido el uso de
              Jobinder para actividades ilegales, fraudulentas o no éticas.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 className="mb-5 fw-bold">Servicios de Jobinder</h1>
            <h2 className="mb-3">3.1 Servicios para Candidatos</h2>
            <p className="mb-3 mx-3">
              Jobinder ofrece servicios para candidatos, incluyendo la búsqueda
              de empleo, la aplicación a vacantes, la posibilidad de grabar un
              video de presentación y la opción de cargar el currículum vitae.
              Jobinder hará todo lo posible para proporcionar ofertas de empleo
              relevantes y oportunidades de carrera basadas en tus habilidades
              de programación, sin embargo, no se garantiza la obtención de
              empleo.
            </p>

            <h2 className="mb-3">3.2 Servicios para Reclutadores</h2>
            <p className="mb-3 mx-3">
              Jobinder ofrece servicios para reclutadores, incluyendo la
              publicación de vacantes, la búsqueda de talentos y la gestión de
              los procesos de selección. Los reclutadores son responsables de
              cumplir con las leyes laborales y garantizar la precisión de la
              información proporcionada en las vacantes publicadas.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3">4. Privacidad y Protección de Datos</h2>
            <p className="mb-3 mx-3">
              Jobinder se compromete a proteger tu privacidad y a procesar tus
              datos personales de acuerdo con las leyes aplicables. Consulta
              nuestra Política de Privacidad para obtener información detallada
              sobre cómo recopilamos, utilizamos y protegemos tus datos
              personales.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3">5. Propiedad Intelectual</h2>
            <p className="mb-3 mx-3">
              Jobinder es titular de todos los derechos de propiedad intelectual
              relacionados con la página web y sus contenidos. No está permitido
              utilizar, copiar o distribuir cualquier material protegido sin el
              consentimiento previo por escrito de Jobinder.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-5 mt-3 fw-bold">
              6. Exclusión de Responsabilidad
            </h2>
            <h3 className="mb-3 mt-3">6.1 Contenido de Terceros</h3>
            <p className="mb-3 mx-3 ">
              Jobinder puede contener enlaces o referencias a sitios web de
              terceros. Estos enlaces son proporcionados únicamente para tu
              conveniencia y Jobinder no tiene control sobre el contenido de
              esos sitios. No nos responsabilizamos de la exactitud, legalidad o
              contenido de los sitios web de terceros.
            </p>

            <h3 className="mb-3">6.2 Limitación de Responsabilidad</h3>
            <p className="mb-3 mx-3">
              Jobinder no será responsable de ningún daño directo, indirecto,
              incidental, especial o consecuente derivado del uso o la
              imposibilidad de uso de la página web, incluso si se nos ha
              informado de la posibilidad de tales daños.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mt-3">
              7. Modificación de los Términos y Condiciones
            </h2>
            <p className="mb-3 mx-3">
              Jobinder se reserva el derecho de modificar estos términos y
              condiciones en cualquier momento. Cualquier modificación será
              efectiva a partir de su publicación en la página web. Se
              recomienda revisar periódicamente los términos y condiciones para
              estar al tanto de los cambios.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mt-3">8. Contacto</h2>
            <p className="mb-3 mx-3">
              Si tienes alguna pregunta, comentario o inquietud relacionada con
              estos términos y condiciones, no dudes en contactarnos a través de
              la información de contacto proporcionada en la página web.
            </p>
            <p className="mb-5 mt-5 fw-bold">
              Al utilizar la página web de Jobinder, aceptas los términos y
              condiciones establecidos anteriormente. Te recomendamos leer
              detenidamente estos términos antes de utilizar los servicios de
              Jobinder.
            </p>
            <Form.Group className="text-center ">
              <Form.Check
                type="checkbox"
                label="He leído y acepto los términos y condiciones"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="d-flex justify-content-center align-items-center "
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TerminosCondiciones;
