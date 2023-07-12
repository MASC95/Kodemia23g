import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBookReader,
  FaWhatsapp,
  FaQuestion,
  FaMapMarked,
  FaShieldAlt,
  FaTiktok,
  FaInfo,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Footer/footer.scss";

const Footer = () => {
  return (
    <footer
      className="text-center"
      style={{
        backgroundColor: "#498ba6",
        fontFamily: "Poppins",
      }}
    >
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <section className="mb-4 mt-5 d-flex justify-content-evenly w-50">
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-F"
                to="https://www.facebook.com/profile.php?id=100094321044877"
                role="button"
              >
                <FaFacebookF />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-TW"
                to="https://twitter.com/JobinderOficial?t=Sja_j7YFlngIwuGu7nCmEA&s=09"
                role="button"
              >
                <FaTwitter />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-GO"
                to="https://www.tiktok.com/@jobinder.org1"
                role="button"
              >
                <FaTiktok />
              </Link>
              <Link
                className="btn btn-link btn-floating btn-lg text-white m-1 iconsSocialMedia-IG"
                to="https://instagram.com/officialjobinder?igshid=YWYwM2I1ZDdmOQ=="
                role="button"
              >
                <FaInstagram />
              </Link>
            </section>
          </Col>
        </Row>
        <Row className="text-white fs-5">
          <Col>
            <ul className="d-flex justify-content-around flex-wrap list-unstyled col-md-12"></ul>
          </Col>
        </Row>
        <Row className="text-white fs-5">
          <Col>
            <ul
              className="d-flex justify-content-around flex-wrap list-unstyled col-md-12"
              style={{ fontSize: "15px", textDecoration: "none" }}
            >
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                <Link to="/TerminosyCondiciones">
                  {" "}
                  <FaBookReader
                    className="mx-4 "
                    style={{ width: "30px", height: "30px" }}
                  />{" "}
                  Terminos y Condiciones{" "}
                </Link>
              </li>
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                <Link to="/PoliticaPrivacidad">
                  <FaShieldAlt
                    className="mx-4"
                    style={{ width: "30px", height: "30px" }}
                  />
                  Políticas de Privacidad
                </Link>
              </li>

              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                <a href="tel: 800 212 0022" className="text-decoration-none">
                  {" "}
                  <FaWhatsapp
                    className="mx-4"
                    style={{ width: "30px", height: "30px" }}
                  />{" "}
                  Contacanos!{" "}
                </a>
              </li>
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                <a href="https://www.google.com/maps/place/Kodemia/@19.3958417,-99.1851738,15z/data=!4m6!3m5!1s0x85d1ff670e8593a7:0x412eb750f0bf970c!8m2!3d19.3958417!4d-99.1851738!16s%2Fg%2F11gxmv_zgw?entry=ttu">
                  {" "}
                  <FaMapMarked
                    className="mx-4 "
                    style={{ width: "30px", height: "30px" }}
                  />{" "}
                  Ubicación{" "}
                </a>
              </li>
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                <Link to="/FAQSection">
                  <FaQuestion
                    className="mx-4"
                    style={{ width: "30px", height: "30px" }}
                  />{" "}
                  Preguntas Frecuentes{" "}
                </Link>
              </li>
              <li className="text-footer col-sm-12  col-md-4 col-lg-4 col-xl-4 mb-3 mt-2 w-30">
                <Link to="/About">
                  <FaInfo
                    className="mx-4"
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />{" "}
                  Acerca de Nosotros{" "}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className=" text-center text-white p-3 w-100">
              © Jobinder 2023. All Rights Reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
