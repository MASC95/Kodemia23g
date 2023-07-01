import React from "react";
import { FaCheck } from "react-icons/fa";
import "./scss/style.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import recruiter from "../../Candidate/img/Recruiter.jpg";
import candidate from "../../Candidate/img/Candidate.jpg";
import knowledge from "../../Candidate/img/KnowledgeBackendDev.jpg";
import video from "../../Candidate/img/VideoBlondeGirl.jpg";
import profile from "../../Candidate/img/profile-pic.png";
import "animate.css";
import Footer from "../Footer/Footer";
const Mains = () => {
  return (
    <header>
      <Navbar />
      <div className="primary-container">
        <h1
          className="match d-flex justify-content-center mx-100px m-md-5 animate__animated animate__pulse "
          style={{
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
          }}
        >
          Haz match con las empresas de tus sueños <br />
          con nuestra app de búsqueda de empleo basada en tus <br />
          habilidades de programación.
        </h1>
        <p className="text-mobile d-md-none">
          Con Jobinder, tu trabajo ideal está a sólo un clic de distancia.
        </p>

        <div className="container first-card-container">
          <div className="row gx-5 row-first-card ">
            <div className="left-blank-space col-lg-2 "> </div>

            <div className="father-container-1 col-lg-8 ">
              <div className="child-container-1 d-flex justify-content-center align-items-center">
                <Link
                  to={"/login-recruiter"}
                  className="link-rec text-decoration-none"
                >
                  <div className="card-container-1 card  mb-4">
                    <img
                      src={recruiter}
                      className="card-img-top recruiter-img "
                      alt="recruiter"
                      style={{ maxWidth: "65%", height: "100%" }}
                    />
                    <div className="card-body-1 text-center">
                      <h5 className="card-title-1 ">¿Eres Reclutador?</h5>
                      <p className="card-text-1">
                        Accede a nuestra plataforma para publicar tus vacantes,
                        buscar talentos y gestionar tus procesos de selección.
                      </p>
                    </div>
                    <div className="access-recruiter">
                      {/*  <Link to={"/login-recruiter"} className="link-rec"> */}
                      <button
                        type="button"
                        className="access-btn-rec btn btn-primary "
                      >
                        Accede como Reclutador
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </Link>

                <div className="space d-none d-lg-block "> </div>
                <Link
                  to="/login-candidato"
                  className="link-card text-decoration-none"
                >
                  <div className="card-container-2 card h-100 mb-4">
                    <img
                      src={candidate}
                      className="card-img-top candidate-img"
                      alt="candidate"
                      style={{ maxWidth: "65%", height: "100%" }}
                    />
                    <div className="card-body-2 text-center">
                      <h5 className="card-title-2">¿Eres Candidato?</h5>
                      <p className="card-text-2">
                        Encuentra las mejores ofertas de trabajo, aplica a las
                        vacantes de las empresas más importantes y haz crecer tu
                        carrera
                      </p>
                    </div>
                    <div className="access-candidate">
                      {/* <Link to="/login-candidato" className="link-card"> */}
                      <button
                        type="button"
                        className="access-btn-can btn btn-primary "
                      >
                        Accede como Candidato
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="rigth-blank-space col-lg-2 col-sm-1"></div>
          </div>
        </div>
        <div className="second-cards-container container-fluid">
          <div className="row second-row">
            <div className="col-md-12 column">
              <div className="letras text-center">
                <h2
                  className="eleva "
                  style={{
                    textShadow:
                      "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
                  }}
                >
                  ELEVA TU CARRERA PROFESIONAL AL SIGUIENTE NIVEL
                </h2>
              </div>
            </div>
          </div>
          <div className="row second-cards-row">
            <div className="col-md-6 second-cards-1">
              <div className="card-container-3 card mb-5 ">
                <img src={video} alt="Video" className="card-img-top video" />
                <div className="card-body video-card-body text-center">
                  <div className="card-title video-card-title">
                    Video Presentación
                  </div>
                  <p className="card-text unique-skills">
                    Destaca tus habilidades únicas y asegura el trabajo que
                    mereces.
                  </p>
                  <h6 className="record-video">Grabar Video 🚩</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 second-cards-2">
              <div className="card-container-4 card ">
                <img
                  src={knowledge}
                  alt="skills"
                  className="card-img-top skills"
                />
                <div className="card-body text-center card-body-skills">
                  <div className="card-title card-title-skills">
                    Conocimientos y Habilidades
                  </div>
                  <p className="card-text card-text-skills">
                    Sube tu CV para obtener mejores ofertas laborales y obtener
                    el empleo de tus sueños!.
                  </p>
                  <h6 className="knowledge">Sumar Conocimientos 🚩</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid last-container">
          <div className="row row-last-container">
            <div className="col-md-12 col-last-container">
              <div className="letters-1 text-center">
                <h1
                  className="last-text"
                  style={{
                    textShadow:
                      "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
                  }}
                >
                  En busca de trabajo? Jobinder es tu mejor aliado en la
                  búsqueda de empleo.
                </h1>
              </div>
              <div
                className="jobs"
                style={{
                  textShadow:
                    "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
                }}
              >
                Miles de ofertas laborales están esperandote.
              </div>
            </div>
          </div>
          <div className="row row-checkmarks">
            <div className="col-md-4 col-checkmarks">
              <img
                className=" rounded-circle d-none d-lg-block profile-pic"
                src={profile}
                alt="profile-pic"
              />
            </div>
            <div className="col-md-8  down-cards ">
              <div
                className="final-text text-start d-sm-text-center"
                style={{
                  textShadow:
                    "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
                }}
              >
                <strong>
                  {" "}
                  Encuentra el empleo de tus sueños con Jobinder!
                </strong>
              </div>
              <p
                style={{ color: "#565E6CFF" }}
                className="d-sm-text-center slogan "
              >
                Nuestra aplicación te ayudará a encontrar oportunidades
                laborales acordes a tus habilidades y experiencia.
              </p>
              <ul className="check-list list group ">
                <li className="list-unstyled li-register">
                  <FaCheck color="green" className="icon-check" />
                  Registro gratuito. Encuentra tu proximo trabajo hoy
                </li>
                <li className="list-unstyled li-register">
                  <FaCheck color="green" className="icon-check" />
                  Disfruta de ofertas diarias que se ajustan a tu perfil
                </li>
                <li className="list-unstyled li-register">
                  <FaCheck color="green" className="icon-check" />
                  Personaliza tus alertas de empleo para estar siempre informado
                </li>
                <li className="list-unstyled li-register">
                  <FaCheck color="green" className="icon-check" />
                  Completa tu perfil en Jobinder para mostrar tu profesionalismo
                  y ganar visibilidad{" "}
                </li>
              </ul>
              <div className="last-create-account d-flex justify-content-center">
                <button
                  type="button"
                  className="d-none btn btn-primary btn-create-acc"
                  style={{
                    width: "243px",
                    height: "46px",
                    marginRight: "400px",
                  }}
                >
                  Crea tu Cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </header>
  );
};

export default Mains;
