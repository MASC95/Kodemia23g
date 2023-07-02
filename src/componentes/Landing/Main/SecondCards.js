import React from "react";
import video from "../../Candidate/img/VideoBlondeGirl.jpg";
import knowldege from "../../Candidate/img/KnowledgeBackendDev.jpg";
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
            <div class="card-2">
              <div className="img-div-2">
                <img src={video} className="video-img" alt="Imagen" />
              </div>

              <div class="card-body-2">
                <p className="video"> Video Presentación </p>
                <h5 class="card-title-2 text-center">
                  Destaca tus habilidades únicas y asegura el trabajo que
                  mereces.
                </h5>

                <p class="card-text-2 ">Grabar Video 🚩</p>
              </div>
            </div>
          </div>
          <div className="col-5 columna-2">
            <div class="card-2">
              <div className=" img-div-2">
                <img src={knowldege} alt="Imagen" className=" video-img" />
              </div>
              <div class="card-body-2 ">
                <p className="video ms-3">Conocimientos y Habilidades</p>
                <h5 class="card-title-2 text-center">
                  Sube tu CV para obtener mejores ofertas laborales y obtener el
                  empleo de tus sueños!.
                </h5>

                <p class="card-text-2  ">Sumar Conocimientos 🚩</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondCards;
