import React from "react";
import { FaCheck } from "react-icons/fa";
import './scss/style.scss'
// import NavbarMui from '../NavbarwithMui/NavbarMui';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
const Mains = () => {
  return (
    <>
       <Navbar /> 
      <div className="main-container">
      <h1 className="match d-flex justify-content-center mx-100px m-md-5 ">
        Haz match con las empresas de tus sueños <br />
        con nuestra app de búsqueda de empleo basada en tus <br />
        habilidades de programación
      </h1>
      <p className="text-mobile d-md-none">
         Con Jobinder, tu trabajo ideal está a sólo un clic de distancia
      </p>


      <div className="container first-card-container">
        <div className="row gx-5 ">
          <div className="left-blank-space col-lg-2 col-sm-1"> </div>

          <div className="father-container-1 col-lg-8 col-sm-12">
            <div className="child-container-1 d-flex justify-content-center align-items-center">
              <div className="card-container-1 card h-100 mb-4">
                <img
                  src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc"
                  className="card-img-top recruiter-img"
                  alt="recruiter"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">¿Eres Reclutador?</h5>
                  <p className="card-text">
                    Accede a nuestra plataforma para publicar tus vacantes,
                    buscar talentos y gestionar tus procesos de selección.
                  </p>
                </div>
                <div className="access-recruiter">
                  <Link to={"/login-recruiter"}>
                  <button type="button" className="access-btn-rec btn btn-primary">
                    Accede como Reclutador
                  </button>
                  </Link>
                </div>
              </div>

              <div className="space d-none d-lg-block "></div>

              <div className="card-container-2 card h-100 mb-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
                  className="card-img-top candidate-img"
                  alt="candidate"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">¿Eres Candidato?</h5>
                  <p className="card-text">
                    Encuentra las mejores ofertas de trabajo, aplica a las
                    vacantes de las empresas más importantes y haz crecer tu
                    carrera
                  </p>
                </div>
                <div className="access-candidate">
                <Link to="/login-candidato">
                  <button type="button" className="access-btn-rec btn btn-primary">
                    Accede como Candidato
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="rigth-blank-space col-lg-2 col-sm-1"></div>
        </div>
      </div>
      <div className="second-cards-container container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="letras text-center">
              <h2>ELEVA TU CARRERA PROFESIONAL AL SIGUIENTE NIVEL</h2>
            </div>
          </div>
        </div>
        <div className="row second-cards-row">
          <div className="col-md-6 second-cards-1">
            <div
              className="card-container-3 card mb-5 "
              style={{ width: "50%", height: "100%  " }}
            >
              <img
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Video"
                className="card-img-top video"
                style={{ width: "100%" }}
              />
              <div className="card-body text-center">
                <div
                  className="card-title"
                  style={{ fontSize: "14px", textAlign: "left", color: "gray" }}
                >
                  Video Presentación
                </div>
                <p className="card-text">
                  Destaca tus habilidades únicas y asegura el trabajo que
                  mereces.
                </p>
                <h6 style={{ textAlign: "end", color: "#EA2876FF" }}>
                  Grabar Video 🚩
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 second-cards-2">
            <div
              className="card-container-4 card "
              style={{ width: "50%", height: "100%" }}
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="skills"
                className="card-img-top skills"
                style={{ width: "100%" }}
              />
              <div className="card-body text-center">
                <div
                  className="card-title"
                  style={{ fontSize: "14px", textAlign: "left", color: "gray" }}
                >
                  Conocimientos y Habilidades
                </div>
                <p className="card-text">
                  Haz que tu CV resalte tus conocimientos y habilidades, para
                  que los empleadores vean lo que realmente tienes para ofrecer.
                </p>
                <h6 style={{ textAlign: "end", color: "#EA2876FF" }}>
                  Sumar Conocimientos 🚩
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid last-container">
        <div className="row">
          <div className="col-md-12">
            <div className="letras text-center">
              <h1 className="last-text">
                En busca de trabajo? 
                Jobinder es tu mejor aliado
                en la búsqueda de empleo.
              </h1>
            </div>
            <div className="empleo">
              Miles de ofertas laborales están esperandote.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img
              className="rounded-circle d-none d-lg-block profile-pic"
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              alt="profile-pic"
              style={{ width: "400px", height: "300px" }}
            />
          </div>
          <div className="col-md-8  down-cards ">
            <div className="final-text text-start d-sm-text-center">
              <strong> Encuentra un mejor empleo con Jobinder.</strong>
            </div>
            <p
              style={{ color: "#565E6CFF" }}
              className="d-sm-text-center slogan"
            >
              Nuestra aplicación te ayudará a encontrar oportunidades laborales
              acordes a tus habilidades y experiencia.
            </p>
            <ul className="check-list list group mb-100">
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
            <div className="create-account d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-create-acc"
                style={{ width: "243px", height: "46px", marginRight: "400px" }}
              >
                Crea tu Cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Mains;
