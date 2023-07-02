import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Footer/footer.scss";
const Footer = () => {
  return (
    <footer
      className="text-center"
      style={{ backgroundColor: "#498ba6", fontFamily: "Poppins" }}
    >
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <section className="mb-4 mt-5 d-flex justify-content-evenly w-50">
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-F"
                to="/facebook"
                role="button"
              >
                <FaFacebookF />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-TW"
                to="/twitter"
                role="button"
              >
                <FaTwitter />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-GO"
                to="/google"
                role="button"
              >
                <FaGoogle />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-IG"
                to="/instagram"
                role="button"
              >
                <FaInstagram />
              </Link>
            </section>
          </Col>
        </Row>
        <Row className="text-white fs-5">
          <Col>
            <ul className="d-flex justify-content-around flex-wrap list-unstyled col-md-12">
              <li className="text-footer col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                Institucional
              </li>
              <li className="text-footer col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                Trabaja con Nosotros
              </li>
              <li className="text-footer col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                Cookies
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-white fs-5">
          <Col>
            <ul className="d-flex justify-content-around flex-wrap list-unstyled col-md-12">
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                Terminos y Condiciones
              </li>
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                Políticas de Privacidad
              </li>
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                Preguntas Frecuentes
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-footer text-center text-white p-3 w-100">
              © Jobinder 2023. All Rights Reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
