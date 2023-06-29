import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center" style={{ backgroundColor: "#498ba6" }}>
      <Container>
        <Row>
          <Col>
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
              >
                <FaFacebookF />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
              >
                <FaTwitter />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
              >
                <FaGoogle />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
              >
                <FaInstagram />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
              >
                <FaGithub />
              </a>
            </section>
          </Col>
        </Row>
        <Row className="text-white" style={{ color: "black", fontSize: "24px" }}>
          <Col>
            <ul className="list-unstyled">
              <li className="d-md-block mb-3">Institucional</li>
              <li className="d-md-block mb-3">Candidatos</li>
              <li className="d-md-block mb-3">Reclutadores</li>
            </ul>
          </Col>
        </Row>
        <Row className="text-white" style={{ color: "black", fontSize: "24px" }}>
          <Col>
            <ul className="list-unstyled">
              <li className="d-md-block mb-3">Terminos y Condiciones</li>
              <li className="d-md-block mb-3">Políticas de Privacidad</li>
              <li className="d-md-block mb-3">Preguntas Frecuentes</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
              © Jobinder 2023. All Rights Reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
