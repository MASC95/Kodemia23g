import React from "react";
import login from './img/login.png'
import logo from './img/logo.png'
import './scss/style.scss'
import { Link } from "react-router-dom";

export const LoginRecruiter=()=>{
    return(
        <>
        <section className="Login-page account">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center">
                    <a className="logo_Jobinder" href="index.html">
                        <img src={logo} alt=""/>
                    </a>
                    <h2 className="text-center text-dark">Bienvenido</h2>
                    <form className="text-left clearfix">
                        <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="text-center">
                            <div className="buttons_actions d-grid">  
                                    <button type="submit" className="buttons btn btn-info btn-lg">Enviar</button>               
                                </div>
                        </div>
                    </form>
                    <Link to={`/registerRecruiter`}>
                    <p className="mt-20">No tienes una cuenta?<a href="#"> Crea una con nosotros</a></p>
                    </Link>
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center  shadow-none">
                    <img className="container w-100 h-50" src={login}/>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default LoginRecruiter