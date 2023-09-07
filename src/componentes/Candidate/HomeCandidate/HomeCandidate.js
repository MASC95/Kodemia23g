import React, { useState, useEffect } from "react";
import "./homecandidate.scss";
import "animate.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Candidate/img/img-1.jpg";
import img2 from "../../Candidate/img/img-2.jpg";
import useJob from "../../../hooks/useJob";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//import Footer from "../../Landing/Footer/Footer";

const urlImg1 =
  "https://frontjobinderimg.s3.amazonaws.com/DreamShaper_v7_estate_agent_working_hard_in_office_while_his_a_2.jpg";
const urlImg2 =
  "https://frontjobinderimg.s3.amazonaws.com/DreamShaper_v7_estate_agent_working_hard_in_office_reading_a_p_0.jpg";

const HomeCandidate = () => {
  const [anchoVW, setAnchoVW] = useState(window.innerWidth);
  const [myFontSize, setMyFontSize] = useState("4vw");
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
    console.log("anchoVW:..", anchoVW);
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
    if (isMobile) {
      setMyFontSize("5vw");
    }
    if (isDesktop) {
      setMyFontSize("4vw");
    }
    if (isUltraWide) {
      setMyFontSize("2vw");
    }
    if (isUltraWide4k) {
      setMyFontSize("1vw");
    }
  }, []);

  const isMobile = useMediaQuery({
    query: "(max-width: 999px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isUltraWide = useMediaQuery({
    query: "(min-width: 2000px)",
  });
  const isUltraWide4k = useMediaQuery({
    query: "(min-width: 3000px)",
  });

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
        className={"w-75 ms-auto me-auto"}
        controls={false}
      >
        <Carousel.Item className=" ">
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="w-100 "
            src={urlImg1}
            alt="First slide"
          />
          <Carousel.Caption className="">
            <h3
              style={{
                fontSize: `${myFontSize}`,
                color: "white",
                fontFamily: "Poppins",
              }}
              className=" text-center"
            >
              Haz match con las empresas de tus sueños.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{ zIndex: "0", position: "relative" }}
          className=""
        >
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="w-100 "
            src={urlImg2}
            alt="Second slide"
          />

          <Carousel.Caption className="">
            <h3
              style={{
                fontSize: `${myFontSize}`,
                color: "white",
                fontFamily: "Poppins",
              }}
              className="  "
            >
              Explora un mundo de oportunidades con Jobinder
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item
          style={{ zIndex: "0", position: "relative" }}
          className="carousel-img d-none"
        >
          <img
            style={{ zIndex: "0", position: "relative" }}
            className="d-block w-100"
            src="https://frontjobinderimg.s3.amazonaws.com/young-black-businessman-drinking-coffee-while-working-late-computer-office.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-text">
            <h3
              style={{ fontSize: "4vw", color: "white" }}
              className="animate__animated animate__fadeInLeft "
            >
              Descubre tu camino al éxito con Jobinder.
            </h3>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default HomeCandidate;
