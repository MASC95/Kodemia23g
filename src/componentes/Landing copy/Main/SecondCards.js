import React from "react";
/* import video from "../../Candidate/img/VideoBlondeGirl.avif";
import knowldege from "../../Candidate/img/KnowledgeBackendDev.avif"; */
import "./scss/card2.scss";
const SecondCards = () => {
  return (
    <section className="sectionTwo">
      <div className="letras text-center">
        <h2 className="eleva">
          ELEVA TU CARRERA PROFESIONAL AL SIGUIENTE NIVEL
        </h2>

        <hr className="col-md-d-none border-top border-black w-75 d-sm-block d-md-none d-block mx-auto"></hr>
      </div>
      <div className="second-card-container" style={{ marginLeft: "130px" }}>
        <div className="row row-second-card">
          <div className="col-5 columna-2">
            <div className="card-2">
              <picture className="img-div-2">
                <source
                  type="image/jpeg"
                  srcSet="https://frontjobinderimg.s3.amazonaws.com/BlondeGirl.jpg"
                />
                <img
                  src="https://frontjobinderimg.s3.amazonaws.com/VideoBlondeGirl.avif"
                  className="video-img"
                  alt="Imagen"
                />
              </picture>

              <div className="card-body-2">
                {/* <p className="video"> Video Presentación </p> */}
                <h5 className="card-title-2 text-center">
                  Destaca tus habilidades únicas y asegura el trabajo que
                  mereces.
                </h5>

                {/* <p className="card-text-2 ">Grabar Video 🚩</p> */}
              </div>
            </div>
          </div>
          <div className="col-5 columna-2">
            <div className="card-2">
              <picture className=" img-div-2">
                <source
                  type="image/jpeg"
                  srcSet="https://frontjobinderimg.s3.amazonaws.com/KnowledegeBackendDev.jpg"
                />
                <img
                  src="https://frontjobinderimg.s3.amazonaws.com/KnowledgeBackendDev.avif"
                  alt="knowledg-img"
                  className=" video-img"
                />
              </picture>
              <div className="card-body-2 ">
                {/* <p className="video ms-3">Conocimientos y Habilidades</p> */}
                <h5 className="card-title-2 text-center">
                  Postúlate a las mejores ofertas laborales y obtén el
                  empleo de tus sueños!.
                </h5>

                {/* <p className="card-text-2  ">Sumar Conocimientos 🚩</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondCards;
