import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-center" style={{ backgroundColor: "#498ba6", fontFamily: 'Poppins'}}>
      <Container>
        <Row>
          <Col>
            <section className="mb-4 mt-4">
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1"
                to="/facebook"
                role="button"
              >
                <FaFacebookF />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1"
                to="/twitter"
                role="button"
              >
                <FaTwitter />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1"
                to="/google"
                role="button"
              >
                <FaGoogle />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1"
                to="/instagram"
                role="button"
              >
                <FaInstagram />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1"
                to="/github"
                role="button"
              >
                <FaGithub />
              </Link>
            </section>
          </Col>
        </Row>
        <Row className="text-white" style={{ color: "black", fontSize: "24px" }}>
          <Col >
            <ul className="d-flex justify-content-around flex-wrap list-unstyled col-md-12">
              <li className=" col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3 mt-2">Institucional</li>
              <li className=" col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3 mt-2" >Candidatos</li>
              <li className=" col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3 mt-2">Reclutadores</li>
            </ul>
          </Col>
        </Row>
        <Row className="text-white" style={{ color: "black", fontSize: "24px" }}>
          <Col>
            <ul className="d-flex justify-content-around flex-wrap list-unstyled col-md-12">
              <li className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2">Terminos y Condiciones</li>
              <li className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2">Políticas de Privacidad</li>
              <li className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2">Preguntas Frecuentes</li>
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
