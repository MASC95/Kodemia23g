import React, { useEffect } from "react";
import "./scss/style.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FAQSection from "../Footer/LinksFooter/FAQSection";
import "animate.css";
import Footer from "../Footer/Footer";
import Section from "./Section";
import SecondCards from "./SecondCards";
import SectionThree from "./SectionThree";
import useJob from "../../../hooks/useJob";
import { useNavigate } from "react-router-dom";
import HomeCandidate from "../../Candidate/HomeCandidate/HomeCandidate";
const Mains = () => {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecrutier,
    setDataRecruiter,
    dataLocalStorage,
  ] = useJob();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('dataLocalStorage:..',dataLocalStorage);

    if (dataLocalStorage?.role === "candidato") {
      navigate("/dashboard-candidato/home");
    }
    if (dataLocalStorage?.role === "empresa") {
      navigate("/dashboard-recruiter/home");
    }
  }, [dataLocalStorage]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <header style={{ zIndex: "1", position: "absolute" }}>
      <Navbar />
      <HomeCandidate />
      <div className="primary-container">
        <h1
          className="match d-flex justify-content-center mx-100px m-md-5 animate__animated animate__pulse "
          style={{
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
          }}
        >
          Haz match con las empresas de tus sueños <br />
          con nuestra app de búsqueda de empleo basada en tus <br />
          habilidades de programación.
        </h1>
        <p
          className="text-mobile d-md-none mt-5 mb.5"
          style={{ fontFamily: "Poppins" }}
        >
          Con Jobinder, tu trabajo ideal está a sólo un clic de distancia.
        </p>

        <Section />
        <SecondCards />
        <SectionThree />
        <FAQSection />
      </div>
      <Footer />
    </header>
  );
};

export default Mains;
