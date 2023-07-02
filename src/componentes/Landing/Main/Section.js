import React from "react";
import "./scss/style.scss";
import candidate from "../../Candidate/img/Candidate.jpg";
import recruiter from "../../Candidate/img/Recruiter.jpg";
import "./scss/section.scss";
import { Link } from "react-router-dom";
const Section = () => {
  const handleClickCandidate = () => {
    window.location.href = "/login-candidato";
  };
  const handleClickRecruiter = () => {
    window.location.href = "/login-recruiter";
  };
  return (
    <section className="sectionOne">
      <div className="first-card-container">
        <div className="row row-first-card ">
          <div
            className="col-5 columna text-decoration-none"
            onClick={handleClickCandidate}
          >
            {/*  <Link
              to="/login-candidato"
              className="link-card text-decoration-none" 
            > */}
            <div class="cartas">
              <div className="img-div">
                <img src={candidate} className="card-img-top " alt="Imagen" />
              </div>
              <div class="card-body-1 ">
                <h5 class="card-title text-center">¿Eres Reclutador?</h5>
                <p class="card-text text-center">
                  Accede a nuestra plataforma para publicar tus vacantes, buscar
                  talentos y gestionar tus procesos de selección.
                </p>
                <button className="btn-link  btn btn-primary d-flex justify-content-center align-items-center d-none">
                  <a href="!#" class="access-btn">
                    Accede como Reclutador
                  </a>
                </button>
              </div>
            </div>
            {/*  </Link> */}
          </div>
          <div className="col-5 columna " onClick={handleClickRecruiter}>
            <div class="cartas">
              <div className=" img-div">
                <img src={recruiter} alt="Imagen" className="card-img-top" />
              </div>
              <div class="card-body-1 ">
                <h5 class="card-title text-center">¿Eres Candidato?</h5>
                <p class="card-text text-center">
                  Encuentra las mejores ofertas de trabajo, aplica a las
                  vacantes de las empresas más importantes y haz crecer tu
                  carrera.
                </p>
                <button className="btn-link  btn btn-primary d-none">
                  <a className="access-btn " href="!#">
                    Acceder como Reclutador
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
