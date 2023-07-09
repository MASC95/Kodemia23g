import React from "react";
import "./scss/style.scss";
/* import candidate from "../../Candidate/img/Candidate.avif"; */
/* import recruiter from "../../Candidate/img/Recruiter.avif"; */
import "./scss/section.scss";

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
            onClick={handleClickRecruiter}
          >
            {/*  <Link
              to="/login-candidato"
              className="link-card text-decoration-none" 
            > */}
            <div className="cartas">
              <div className="img-div">
                <img
                  src={
                    "https://frontjobinderimg.s3.amazonaws.com/Candidate.avif"
                  }
                  className="card-img-top "
                  alt="Imagen"
                />
              </div>
              <div className="card-body-1 ">
                <h5 className="card-title text-center">¿Eres Reclutador?</h5>
                <p className="card-text text-center">
                  Accede a nuestra plataforma para publicar tus vacantes, buscar
                  talentos y gestionar tus procesos de selección.
                </p>
                <button className="btn-link  btn btn-primary d-flex justify-content-center align-items-center d-none">
                  <a href="!#" className="access-btn">
                    Accede como Reclutador
                  </a>
                </button>
              </div>
            </div>
            {/*  </Link> */}
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-5 columna "
            onClick={handleClickCandidate}
          >
            <div className="cartas">
              <div className=" img-div">
                <img
                  src="https://frontjobinderimg.s3.amazonaws.com/Recruiter.avif"
                  alt="Imagen"
                  className="card-img-top"
                />
              </div>
              <div className="card-body-1 ">
                <h5 className="card-title text-center">¿Eres Candidato?</h5>
                <p className="card-text text-center">
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
