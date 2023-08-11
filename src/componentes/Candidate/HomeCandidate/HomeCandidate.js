import React, { useState, useEffect } from "react";
import "./homecandidate.scss";
import "animate.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Candidate/img/img-1.jpg";
import img2 from "../../Candidate/img/img-2.jpg";
import useJob from "../../../hooks/useJob";
import { useNavigate } from "react-router-dom";

//import Footer from "../../Landing/Footer/Footer";

const HomeCandidate = () => {
  const [anchoVW, setAnchoVW] = useState(window.innerWidth);
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const navigate = useNavigate();

  useEffect(() => {
    setAnchoVW(window.innerWidth);
    // console.log("anchoVW:..", anchoVW);
  }, [window.innerWidth, anchoVW]);

  useEffect(() => {
    if (dataLocalStorage?.role === "candidato") {
      setDataCandidate(dataLocalStorage);
      navigate("/dashboard-candidato/search");
    }
    if (dataLocalStorage?.role === "empresa") {
      setDataRecruiter(dataLocalStorage);
      navigate("/dashboard-recruiter/vacancy");
    }
  }, []);

  const handleError = () => {
    // console.log("Error al cargar imagen:..");
  };
  const handleLoad = () => {
    // console.log("Imagen Cargada con Exito:..");
  };

  return (
    <>
      <Carousel
        style={{ zIndex: "-1000", position: "relative" }}
        className="w-100 main-carousel "
        controls={false}
      >
        <Carousel.Item className="carousel-img ">
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="d-block w-100 carousel-main-img h-25"
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
              Desbloquea tu potencial profesional con Jobinder
            </h3>
            <p
              style={{ fontSize: "2vw" }}
              className="carousel-content animate__animated animate__fadeInLeft"
            >
              Encuentra tu trabajo ideal y da el siguiente paso hacia el éxito
              con Jobinder.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{ zIndex: "0", position: "relative" }}
          className="carousel-img"
        >
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="d-block w-100 h-50"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-text">
            <h3
              style={{ fontSize: "4vw" }}
              className="carousel-title  animate__animated animate__fadeInLeft"
            >
              Explora un mundo de oportunidades con Jobinder
            </h3>
            <p
              style={{ fontSize: "2vw" }}
              className="carousel-content animate__animated animate__fadeInLeft"
            >
              Encuentra oportunidades laborales emocionantes y alcanza tus metas
              profesionales con Jobinder.
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
              Descubre tu camino al éxito con Jobinder
            </h3>
            <p
              style={{ fontSize: "2vw" }}
              className="carousel-content animate__animated animate__fadeInLeft"
            >
              Desplázate por un mar de oportunidades laborales con Jobinder, tu
              guía en el mundo del empleo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCandidate;
