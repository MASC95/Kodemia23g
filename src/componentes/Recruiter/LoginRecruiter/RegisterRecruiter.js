import React from "react";
import logo from './img/logo.png'
import register from './img/14.png'
import './scss/style.scss'
import { Link } from "react-router-dom";

export const RegisterRecruiter=()=>{
    return(
        <>
        <section className="signin-page account">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="block text-center">
                  <Link to={'/'}>
                <a className="logo_Jobinder" href="#!">
                    <img src={logo} alt=""/>
                </a>
                  </Link>
                <h2 className="text-center">Bienvenido</h2>
                <form className="text-left clearfix">
                    <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="RFC"/>
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Confirmar Password"/>
                    </div>
                    <div className="text-center">
                    <div className="buttons_actions d-grid">  
                        <button type="submit" className="buttons btn btn-info btn-lg">Enviar</button>               
                    </div>
                  </div>
                </form>
                <p className="mt-20 text-black">Ya tienes una cuenta?
                <Link to={`/login-recruiter`}>
                <a href="#"> Accede</a>
                </Link>
                </p>
                </div>
              </div>
            <div className="col-md-6 col-md-offset-3">
                <div className="block text-center  shadow-none">
                <img className="container w-100 h-50" src={register}/>
                </div>
            </div>
            </div>
          </div>
        </section>
        
        </>
    )

}

export default RegisterRecruiter