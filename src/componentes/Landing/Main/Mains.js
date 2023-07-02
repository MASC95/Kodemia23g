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
import Section from "./Section";
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
        <Section />
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
