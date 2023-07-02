import React from "react";
import "./scss/style.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import "animate.css";
import Footer from "../Footer/Footer";
import Section from "./Section";
import SecondCards from "./SecondCards";
import SectionThree from "./SectionThree";
const Mains = () => {
  return (
    <header>
      <Navbar />
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
        <p className="text-mobile d-md-none">
          Con Jobinder, tu trabajo ideal está a sólo un clic de distancia.
        </p>

        <Section />
        <SecondCards />
        <SectionThree />
      </div>
      <Footer />
    </header>
  );
};

export default Mains;
