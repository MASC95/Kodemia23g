import React from 'react'
import {FaCheck} from 'react-icons/fa';
import "./main.css"

const Mains = () => {
  return (
    <div className="main-container">
    
    
    <h1 className="match d-flex justify-content-center mx-100px m-md-5 " >
        Haz match con las empresas de tus sueños <br/>
        con nuestra app de búsqueda de empleo basada en tus <br/>
        habilidades de programación
    </h1>
    
    <div className="container">
  <div className="row gx-5 ">

    <div className="col-lg-2 col-sm-1">
      
    </div>

    <div className="col-lg-8 col-sm-12">
  <div className="d-flex justify-content-center align-items-center gap-2">
    <div className="card-container-1 card h-100">
      <img src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc" className="card-img-top" alt="Card image cap" style={{width: "266px", height: "200px"}} />
      <div className="card-body text-center">
        <h5 className="card-title">¿Eres Reclutador?</h5>
        <p className="card-text">Accede a nuestra plataforma para publicar tus vacantes, buscar talentos y gestionar tus procesos de selección.</p>
      </div>
      <div className="acceder-reclutador">
      <button type="button" class="btn btn-primary">Accede como Reclutador</button>
      </div>
    </div>
  
    <div className="create-account">
      <h5><strong> Crea tu Cuenta </strong></h5>
    </div>
  
    <div className="card-container-2 card h-100">
      <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Card image cap" style={{width: "266px", height: "200px"}} />
      <div className="card-body text-center">
        <h5 className="card-title">¿Eres Candidato?</h5>
        <p className="card-text">Encuentra las mejores ofertas de trabajo, aplica a las vacantes de las empresas más importantes y haz crecer tu carrera</p>
      </div>
      <div className="acceder-candidato">
      <button type="button" className="btn btn-primary d-flex "  >Accede como Candidato</button>
      </div>
    </div>
    
  </div>
</div>

    <div className="col-lg-2 col-sm-1">
     
    </div>
    

  </div>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      <div className="letras text-center">
        <h2>ELEVA TU CARRERA PROFESIONAL AL SIGUIENTE NIVEL</h2>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 cards-abajo">
      <div className="card-container-3 card h-100">
        <img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="Card image cap" style={{width: "400px", height: "200px"}} />
        <div className="card-body text-center">
          <div className="card-title" style={{ fontSize: "14px" , textAlign: "left", color:"gray" }}>Video Presentación</div>
          <p className="card-text">Destaca tus habilidades únicas y asegura el trabajo que mereces.</p>
          <h6 style={{ textAlign:"end", color: "#EA2876FF" }} >Grabar Video 🚩</h6>
        </div>
        
      </div>
    </div>
    <div className="col-md-6 cards-abajo">
      <div className="card-container-4 card h-100 ">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="Card image cap" style={{width: "400px", height: "200px"}} />
        <div className="card-body text-center">
          <div className="card-title" style={{ fontSize: "14px" , textAlign: "left", color:"gray" }}>Conocimientos y Habilidades</div>
          <p className="card-text" >Haz que tu CV resalte tus conocimientos y habilidades, para que los empleadores vean lo que realmente tienes para ofrecer.</p>
          <h6 style={{ textAlign:"end", color: "#EA2876FF" }} >Sumar Conocimientos 🚩</h6>
        </div>
        
      </div>
    </div>
  </div>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      <div className="letras text-center">
        <h1>En busca de trabajo? Jobinder es tu mejor aliado en la búsqueda de empleo.</h1 >
      </div>
      <div className="empleo">
      Miles de ofertas laborales están esperandote.
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-3 cards-abajo">
      <img className='rounded-circle'src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="profile-pic" style={{width:"400px", height: "300px"}}/>
    </div>
    <div className="col-md-8 cards-abajo">
      <div className="texto-final text-start">
     <strong> Encuentra un mejor empleo con Jobinder.</strong>
      </div>
      <p style={{color: "#565E6CFF"}}> Nuestra aplicación te ayudará a encontrar oportunidades laborales acordes a tus habilidades y experiencia. </p>
      <ul className="list group mb-100">
     <li className ="list-unstyled "> <FaCheck color="green" className=""/>Registro gratuito. Encuentra tu proximo trabajo hoy </li>
     <li className ="list-unstyled"> <FaCheck color="green" className="" />Disfruta de ofertas diarias que se ajustan a tu perfil  </li>
     <li className ="list-unstyled"> <FaCheck color="green"className="" />Personaliza tus alertas de empleo para estar siempre informado </li>
     <li className ="list-unstyled"> <FaCheck color="green" className=""/>Completa tu perfil en Jobinder para mostrar tu profesionalismo y ganar visibilidad </li>
      </ul>
    </div>  
  </div>
</div>


    </div>
  )
}

export default Mains