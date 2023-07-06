import React from "react";
import "./scss/sectionthree.scss";
import "../../Candidate/img/profile-pic.png";
import profile from "../../Candidate/img/profile-pic.png";
import { FaCheck } from "react-icons/fa";

const SectionThree = () => {
  return (
    <section className="sectionThree">
      <h1
        className="last-text"
        style={{
          textShadow:
            "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
        }}
      >
        En busca de trabajo? Jobinder es tu mejor aliado en la búsqueda de
        empleo.
      </h1>

      <div className="container-fluid main-container">
        <div className="row gx-1 row-main-container">
          <div className="col-md-3 contenedor-imagen d-flex justify-contenr-end">
            <img
              className=" rounded-circle d-none d-lg-block profile-pic-1"
              src={profile}
              alt="profile-pic-1"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9  container-ul">
            <h2
              className="final-text text-start d-sm-text-center"
              style={{
                textShadow:
                  "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
              }}
            >
              Encuentra el empleo de tus sueños con Jobinder!{" "}
            </h2>
            <p
              style={{ color: "#565E6CFF" }}
              className="d-sm-text-center slogan "
            >
              Nuestra aplicación te ayudará a encontrar oportunidades laborales
              acordes a tus habilidades y experiencia.
            </p>
            <ul className="check-list list group w-100 ">
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
                Completa tu perfil en Jobinder para mostrar tu profesionalismo y
                ganar visibilidad{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
