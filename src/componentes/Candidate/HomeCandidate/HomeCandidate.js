import React, { useState, useEffect } from "react";
import "./homecandidate.scss";
import "animate.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Candidate/img/img-1.jpg";
import img2 from "../../Candidate/img/img-2.jpg";
import img3 from "../../Candidate/img/img-3.jpg";
import Footer from "../../Landing/Footer/Footer";

const HomeCandidate = () => {
  const [anchoVW, setAnchoVW] = useState(window.innerWidth);

  useEffect(() => {
    setAnchoVW(window.innerWidth);
    console.log("anchoVW:..", anchoVW);
  }, [window.innerWidth, anchoVW]);

  return (
    <>
      <Carousel style={{zIndex:'0', position:'relative'}} className="w-100 main-carousel ">
        <Carousel.Item style={{zIndex:'0', position:'relative'}} className="carousel-img">
          <img
          style={{zIndex:'0', position:'relative'}}
            className="d-block w-100 carousel-main-img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-text">
            <h2
              style={{ fontSize: "7vw" }}
              className="welcome-text animate__animated animate__heartBeat animate__delay-2s"
            >
              Welcome to Jobinder{" "}
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
        <Carousel.Item style={{zIndex:'0', position:'relative'}} className="carousel-img">
          <img style={{zIndex:'0', position:'relative'}} className="d-block w-100" src={img2} alt="Second slide" />

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
        <Carousel.Item style={{zIndex:'0', position:'relative'}} className="carousel-img">
          <img style={{zIndex:'0', position:'relative'}} className="d-block w-100" src={img3} alt="Third slide" />

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
      <Footer />
    </>
  );
};

export default HomeCandidate;
