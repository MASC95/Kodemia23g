import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center" style={{ backgroundColor: "#498ba6", fontFamily: 'Poppins'}}>
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
          <Col classname= ''>
            <ul className="d-flex justify-content-around list-unstyled">
              <li>Institucional</li>
              <li>Candidatos</li>
              <li>Reclutadores</li>
            </ul>
          </Col>
        </Row>
        <Row className="text-white" style={{ color: "black", fontSize: "24px" }}>
          <Col>
            <ul className="d-flex justify-content-around list-unstyled">
              <li>Terminos y Condiciones</li>
              <li>Políticas de Privacidad</li>
              <li>Preguntas Frecuentes</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center text-white p-3" >
              © Jobinder 2023. All Rights Reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

