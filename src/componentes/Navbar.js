import React from "react";
import "../stylesheets/navbar.css";


const Navbar = () => {
  return (
    <div>
      <header
        className="primary-header"
        style={{ boxShadow: "1px 1px 4px grey" }}
      >
        <nav className="navbar container d-flex justify-content-between align-items-center ">
          <a href="#" className="logo col-3">
            JOBINDER
          </a>
          <ul className="navbar col-7 d-flex flex-row ">
            <li className="nav-item ">
              <a href="#!" className="nav-link ">
                PERFIL
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                BUSQUEDA
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                MIS VACANTES
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                CERRAR SESIÓN
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary col-2 "
            style={{
              width: "10vw",
              height: "7vh",
              boxShadow: "1px 1px 4px grey",
            }}
          >
            Ingresar
          </button>
        </nav>
      </header>
      <main className="container my-5">
        <h1>
          Jobinder Conectando talentos y oportunidades, un match a la vez.
        </h1>

        <div className="row my-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://static.wixstatic.com/media/db1759_d15635cbc0e44d289279d19d0413efad~mv2.png/v1/fill/w_97,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/software%20de%20reclutamiento.png"
                  alt="profile-pic1"
                  className="rounded-circle "
                  style={{ width: "15vw", height: "15vh" }}
                />
                <h5 className="card-title">¿Eres Reclutador?</h5>
                <p className="card-text">
                  Accede a nuestra plataforma para publicar tus vacantes, buscar
                  talentos y gestionar tus procesos de selección.
                </p>
                <a href="#!" className="btn btn-primary">
                  Acceder como Reclutador
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://static.wixstatic.com/media/87303a_b8da96639f8742fda91d0e68f307e88f~mv2.jpg/v1/fill/w_122,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/empresario.jpg"
                  alt="profile-pic2"
                  className="rounded-circle"
                  style={{ width: "15vw", height: "15vh" }}
                />
                <h5 className="card-title">¿Eres Empleado?</h5>
                <p className="card-text">
                  Encuentra las mejores ofertas de trabajo, aplica a las
                  vacantes de las empresas más importantes y haz crecer tu
                  carrera profesional.
                </p>
                <a href="#!" className="btn btn-primary">
                  Acceder como Empleado
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
     
    </div>
  );
};

export default Navbar;
