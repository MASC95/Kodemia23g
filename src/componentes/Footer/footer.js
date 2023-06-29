import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
      <div className="row">
        <div className="col-sm-md-12">
    <div className="container pt-4">
      <section className="mb-4">
        <a className="btn btn-link btn-floating btn-lg text-dark m-1 "
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <FaFacebookF />
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <FaTwitter />
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <FaGoogle />
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <FaInstagram />
        </a>
      
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <FaGithub />
        </a>
      </section>
      </div>
    </div>
    <ul className="d-flex justify-content-around list-unstyled" style={{color:"black", fontSize: "24px" }}>
      <li>Institucional</li>
      <li>Candidatos</li>
      <li>Reclutadores</li>
    </ul>
    <ul className='d-flex justify-content-around list-unstyled' style={{color:"black", fontSize: "24px" }}>
    <li>Terminos y Condiciones</li>
      <li>Políticas de Privacidad</li>
      <li>Preguntas Frecuentes</li>
    </ul>
    <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © Jobinder 2023. All Rights Reserved.
    </div>
    </div>
  </footer>
  );
};

export default Footer;
