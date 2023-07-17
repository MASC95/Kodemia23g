import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const PoliticaPrivacidad = () => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const estilo = {
    backgroundImage: " linear-gradient(to top, #37ecba 0%, #72afd3 100%)  ",
    fontFamily: "Poppins",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "25px",
    color: "#0D324D",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
  };

  const iconStyle = {
    width: "5vw",
    height: "5vh",
    color: hovered ? "#232ED1 " : "#004BA8",
    backgroundColor: "transparent",

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
      <Container className="m-3 p-5  " style={estilo}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <FaHome
            style={iconStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>

        <h1 className="text-center mb-5 fw-bold">
          Política de Privacidad de Jobinder
        </h1>

        <p className="mb-3">
          Fecha de entrada en vigor: 23 de Septiembre del 2023
        </p>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Introducción</span>
            </h2>
            <p className="mx-3">
              En Jobinder, nos tomamos muy en serio la privacidad y la
              protección de tus datos personales. Esta Política de Privacidad
              describe cómo recopilamos, utilizamos y protegemos la información
              que recopilamos a través de nuestra plataforma de búsqueda de
              empleo.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Recopilación de Información Personal</span>
            </h2>
            <p className="mx-3">
              Cuando te registras en Jobinder y utilizas nuestros servicios, es
              posible que recopilemos cierta información personal para ofrecerte
              una experiencia personalizada y mejorar nuestros servicios. La
              información personal que recopilamos puede incluir, entre otros
              datos:
            </p>
            <ol className="mx-3">
              <li>Información de Registro</li>
              <li>Perfil Profesional</li>
              <li>Actividad en la Plataforma</li>
              <li>Comunicaciones</li>
            </ol>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Uso de la Información Personal</span>
            </h2>
            <p className="mx-3">
              Utilizamos la información personal que recopilamos de las
              siguientes formas:
            </p>
            <ol className="mx-3">
              <li>Personalización de la Experiencia</li>
              <li>Comunicación Contigo</li>
              <li>Mejora de Nuestros Servicios</li>
              <li>Seguridad y Prevención de Fraude</li>
            </ol>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Compartir Información Personal</span>
            </h2>
            <p className="mx-3">
              En Jobinder, nos comprometemos a proteger tu privacidad y no
              compartimos tu información personal con terceros sin tu
              consentimiento, excepto en casos específicos.
            </p>
            <ol className="mx-3">
              <li>Empresas y Reclutadores</li>
              <li>Proveedores de Servicios</li>
              <li>Cumplimiento Legal</li>
            </ol>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Seguridad de los Datos</span>
            </h2>
            <p className="mx-3">
              En Jobinder, tomamos medidas de seguridad para proteger tu
              información personal y mantenerla segura. Utilizamos técnicas de
              cifrado, controles de acceso y procedimientos de seguridad para
              prevenir el acceso no autorizado y el uso indebido de tus datos.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Tus Derechos y Opciones</span>
            </h2>
            <p className="mx-3">
              Tienes ciertos derechos y opciones con respecto a tu información
              personal. Estos incluyen el acceso y actualización de tus datos,
              la eliminación de datos, preferencias de comunicación y control de
              cookies y tecnologías similares.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Cambios en la Política de Privacidad</span>
            </h2>
            <p className="mx-3">
              Podemos modificar esta Política de Privacidad ocasionalmente. Te
              recomendamos que revises esta página periódicamente para estar al
              tanto de los cambios.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Contacto</span>
            </h2>
            <p className="mx-3">
              Si tienes preguntas, comentarios o inquietudes relacionadas con
              nuestra Política de Privacidad, no dudes en contactarnos a través
              de la información de contacto proporcionada en nuestra plataforma.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="mb-3 mx-3">
              <span className="">Conclusión</span>
            </h2>
            <p className="mx-3">
              En Jobinder, nos preocupamos por tu privacidad y nos esforzamos
              por proteger tus datos personales. Esta Política de Privacidad
              tiene como objetivo proporcionarte una descripción clara de cómo
              recopilamos, utilizamos y protegemos tu información. Al utilizar
              nuestros servicios, aceptas los términos de esta Política de
              Privacidad.
            </p>
            <p className="mx-3">
              ¡Gracias por confiar en Jobinder para tu búsqueda de empleo!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PoliticaPrivacidad;
