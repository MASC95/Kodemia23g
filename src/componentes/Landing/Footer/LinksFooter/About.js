import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax"; // Importamos la librería react-parallax

const About = () => {
  const style = {
    color: "#f2f2f2",
    fontFamily: "Poppins",
  };

  return (
    <div>
      <Parallax
        bgImage="https://frontjobinderimg.s3.amazonaws.com/extra4.jpg"
        bgImageAlt="Background Image"
        strength={500} // Ajusta la fuerza del efecto de parallax según tu preferencia
      >
        <div style={{ height: "100vh" }}>
          <Container fluid style={{ height: "100%" }}>
            <Row
              className="justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <Col md={6} className="text-right">
                <h3 className="mb-3 mt-3 p-5" style={style}>
                  Bienvenido a Jobinder, la plataforma líder en búsqueda de
                  empleo dedicada a conectar a los buscadores de empleo con sus
                  trabajos ideales. Nuestra misión es simplificar el proceso de
                  búsqueda de empleo y ayudar tanto a los candidatos como a los
                  empleadores a encontrar la combinación perfecta. Con nuestros
                  algoritmos de coincidencia avanzados y una interfaz fácil de
                  usar, ahora es más fácil que nunca encontrar oportunidades
                  laborales que se alineen con tus habilidades y preferencias.
                  Ya sea que estés buscando un trabajo a tiempo completo,
                  trabajo a tiempo parcial o proyectos freelance, Jobinder tiene
                  todo lo que necesitas. Nuestra extensa base de datos de
                  empleos abarca diversas industrias y ubicaciones geográficas,
                  brindándote acceso a una amplia gama de oportunidades
                  emocionantes. En Jobinder, nos esforzamos por ofrecerte un
                  proceso de búsqueda de empleo eficiente y efectivo. También
                  puedes crear un perfil personalizado para que los empleadores
                  interesados puedan encontrarte. Estamos comprometidos a
                  brindarte las herramientas y los recursos necesarios para
                  tener éxito en tu búsqueda de empleo. Jobinder ofrece
                  funciones adicionales para ayudarte en tu trayectoria
                  profesional. Jobinder es tu compañero confiable en la búsqueda
                  de empleo. Únete a nuestra comunidad hoy mismo y comienza tu
                  viaje hacia una carrera gratificante. Estamos aquí para
                  ayudarte a alcanzar tus metas profesionales y hacer que el
                  proceso de búsqueda de empleo sea más fácil y exitoso.
                  ¡Descubre el poder de Jobinder y da un impulso a tu carrera
                  ahora mismo!
                </h3>
              </Col>
              <Col md={6} className="text-center">
                <h2 className="mb-3 mt-3" style={style}>
                  Acerca de Jobinder
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
