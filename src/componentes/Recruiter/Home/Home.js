import React from "react";
import './Scss/style.scss';
// import 'animate.css';
import Carousel from 'react-bootstrap/Carousel';
export const HomeRecruiter=()=>{
    return(
        <>
            {/* <h1 className="text-center">BIENVENIDO A JOBINDER</h1> */}
            <Carousel className="w-100 main-carousel d-sm-block h-100">
        <Carousel.Item className="carousel-img">
          <img
            style={{width:'100vw', height:'90vh',backgroundSize:'cover'}}
            className="d-block w-100 carousel-main-img carousel-main-img"
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-text">
            <h2 className="welcome-text animate__animated animate__heartBeat animate__delay-2s d-flex justify-content-center align-items-center d-sm-inline small" style={{fontSize:'7vw'}}>Welcome to Jobinder </h2>
            <h3 style={{fontSize:'4vw'}} className="carousel-title animate__animated animate__fadeInLeft">Encuentra al candidato ideal</h3>
            <p style={{fontSize:'2vw'}} className="carousel-content animate__animated animate__fadeInLeft">Con base a sus habilidades</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 

        </>
    )
}
export default HomeRecruiter