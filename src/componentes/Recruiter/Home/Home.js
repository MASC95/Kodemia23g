import React from "react";
import "./Scss/style.scss";
// import 'animate.css';
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Candidate/img/img-1.jpg";
import img2 from "../../Candidate/img/img-2.jpg";
export const HomeRecruiter = () => {
  const handleError = () => {
    console.log("Error al cargar imagen:..");
  };
  const handleLoad = () => {
    // console.log("Imagen Cargada con Exito:..");
  };
  return (
    <>
      {/* <h1 className="text-center">BIENVENIDO A JOBINDER</h1>  */}
      <Carousel
        style={{ zIndex: "-1000", position: "relative" }}
        className="w-100 main-carousel "
        controls={false}
      >
        <Carousel.Item className="carousel-img">
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="d-block w-100 carousel-main-img"
            src={img1}
            onError={handleError}
            onLoad={handleLoad}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-text">
            <h2
              style={{ fontSize: "7vw" }}
              className="welcome-text animate__animated animate__heartBeat animate__delay-2s"
            >
              Bienvenido a Jobinder!{" "}
            </h2>
            <h3
              style={{ fontSize: "4vw" }}
              className="carousel-title animate__animated animate__fadeInLeft"
            >
              Optimiza tu proceso de selección
            </h3>
            <p
              style={{ fontSize: "2vw" }}
              className="carousel-content animate__animated animate__fadeInLeft"
            >
              maximiza tu eficiencia en reclutamiento y descubre candidatos
              sobresalientes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{ zIndex: "0", position: "relative" }}
          className="carousel-img"
        >
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-text">
            <h3
              style={{ fontSize: "4vw" }}
              className="carousel-title  animate__animated animate__fadeInLeft"
            >
              Destaca tus vacantes en el mercado laboral
            </h3>
            <p
              style={{ fontSize: "2vw" }}
              className="carousel-content animate__animated animate__fadeInLeft"
            >
              Publica ofertas irresistibles con la ayuda de Jobinder.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{ zIndex: "0", position: "relative" }}
          className="carousel-img"
        >
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="d-block w-100"
            src="https://frontjobinderimg.s3.amazonaws.com/businessman-woman-planning-success-illuminated-skyscraper-generated-by-ai.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-text">
            <h3
              style={{ fontSize: "4vw" }}
              className="carousel-title  animate__animated animate__fadeInLeft"
            >
              Simplifica tu proceso de búsqueda de candidatos
            </h3>
            <p
              style={{ fontSize: "2vw" }}
              className="carousel-content animate__animated animate__fadeInLeft"
            >
              Jobinder agiliza y facilita tu proceso de reclutamiento.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HomeRecruiter;
