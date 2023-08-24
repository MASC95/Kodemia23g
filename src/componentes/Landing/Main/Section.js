import React, { useEffect, useState } from "react";
import "./scss/style.scss";
import candidate from "../../Candidate/img/Candidate.avif";
import recruiter from "../../Candidate/img/Recruiter.avif";
import "./scss/section.scss";
import Button2 from "../../Candidate/Buttons/Button2";
import { FaCode } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
const Section = () => {
  const [isErorImgCadidate, setIsErorImgCandidate] = useState(false);
  const [isErorImgRecrutier, setIsErorImgRecrutier] = useState(false);
  const handleClickCandidate = () => {
    window.location.href = "/login-candidato";
  };
  const handleClickRecruiter = () => {
    window.location.href = "/login-recruiter";
  };

  useEffect(() => {
    // console.log("Recargando por falla de Imagen:..");
    //console.log(isErorImg);
  }, [isErorImgCadidate, isErorImgRecrutier]);

  const handleErrorImg = (e) => {
    // console.log("Error al cargar img:..", e.target.name);
    const failImg = e.target.name;
    if (failImg === "candidateImg") {
      setIsErorImgCandidate((prev) => !prev);
    } else {
      setIsErorImgRecrutier((prev) => !prev);
    }
  };

  const handleLoadImg = (e) => {
    // console.log("Success al cargar img:..", e.target.name);
  };

  return (
    <section className="sectionOne">
      <div className="first-card-container">
        <div className="row row-first-card ">
          <div className="col-5 columna ">
            {/*  <Link
              to="/login-candidato"
              className="link-card text-decoration-none" 
            > */}
            <div className="cartas" style={{ cursor: "pointer" }}>
              {/*  <picture className="img-div">
                <source
                  type="image/jpeg"
                  srcSet="https://frontjobinderimg.s3.amazonaws.com/Candidate.jpg"
                />
                <img
                  src={
                    "https://frontjobinderimg.s3.amazonaws.com/Candidate.avif"
                  }
                  name="candidateImg"
                  onError={handleErrorImg}
                  onLoad={handleLoadImg}
                  className="card-img-top "
                  alt="Imagen"
                />
              </picture> */}
              <div className="d-flex justify-content-center align-items-center">
                <FaUserTie
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "35px",
                    color: "black",
                    marginTop: "20px",
                  }}
                />
              </div>

              <div className="card-body-1 ">
                <h5 className="card-title text-center">¿Eres Reclutador?</h5>
                <p className="card-text text-center">
                  Accede a nuestra plataforma para publicar tus vacantes, buscar
                  talentos y gestionar tus procesos de selección.
                </p>
                <div
                  className="d-flex justify-content-center align-items-center"
                  onClick={handleClickRecruiter}
                >
                  <Button2
                    className="access"
                    text="Acceder como reclutador"
                    colortext="#fff"
                    widthB="250px"
                    bgcolor="#106973"
                    fs="14px"
                    paddingB="10px 20px 10px 20px"
                    borde="none"
                    altura="50px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 columna ">
            <div className="cartas" style={{ cursor: "pointer" }}>
              {/* <picture className=" img-div">
                <source
                  type="image/jpeg"
                  srcSet="https://frontjobinderimg.s3.amazonaws.com/Recruiter.jpg"
                />
                <img
                  src={
                    "https://frontjobinderimg.s3.amazonaws.com/Recruiter.avif"
                  }
                  name="recrutierImg"
                  onError={handleErrorImg}
                  onLoad={handleLoadImg}
                  alt="Imagen"
                  className="card-img-top"
                />
              </picture> */}

              <div className="d-flex justify-content-center align-items-center">
                <FaCode
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "30px",

                    color: "black",
                    marginTop: "20px",
                  }}
                />
              </div>
              <div className="card-body-1 ">
                <h5 className="card-title text-center">¿Eres Candidato?</h5>
                <p className="card-text text-center">
                  Encuentra las mejores ofertas de trabajo, aplica a las
                  vacantes de las empresas más importantes.
                </p>

                <div
                  className="d-flex justify-content-center align-items-center"
                  onClick={handleClickCandidate}
                >
                  <Button2
                    className="access"
                    text="Acceder como candidato"
                    colortext="#fff"
                    widthB="250px"
                    bgcolor="#106973"
                    fs="14px"
                    paddingB="10px 20px 10px 20px"
                    borde="none"
                    altura="50px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
