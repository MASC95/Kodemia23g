import React, { useState, useEffect } from "react";
import './homecandidate.scss';
import 'animate.css';
import Carousel from 'react-bootstrap/Carousel';
const HomeCandidate = () => {


    return(
        <Carousel className="w-100 main-carousel">
        <Carousel.Item className="carousel-img">
          <img
            className="d-block w-100 carousel-main-img"
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-text">
            <h2 className="welcome-text animate__animated animate__heartBeat animate__delay-2s">Welcome to Jobinder </h2>
            <h3 className="carousel-title animate__animated animate__fadeInLeft">Desbloquea tu potencial profesional con Jobinder</h3>
            <p className="carousel-content animate__animated animate__fadeInLeft">Encuentra tu trabajo ideal y da el siguiente paso hacia el éxito con Jobinder.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-img">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
          />
  
          <Carousel.Caption className="carousel-text">
            <h3 className="carousel-title  animate__animated animate__fadeInLeft">Explora un mundo de oportunidades con Jobinder</h3>
            <p className="carousel-content animate__animated animate__fadeInLeft">Encuentra oportunidades laborales emocionantes y alcanza tus metas profesionales con Jobinder.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-img">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
          />
  
          <Carousel.Caption className="carousel-text">
            <h3 className="carousel-title  animate__animated animate__fadeInLeft">Descubre tu camino al éxito con Jobinder</h3>
            <p className="carousel-content animate__animated animate__fadeInLeft">
            Desplázate por un mar de oportunidades laborales con Jobinder, tu guía en el mundo del empleo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>  
     
    );
};

export default HomeCandidate;
