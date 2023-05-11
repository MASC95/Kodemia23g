import React from "react";
import login from './img/login.png'
import logo from './img/logo.png'
import './scss/style.scss'
import { Link, useNavigate } from "react-router-dom";

export const LoginCandidate = ()=>{

    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        navigate('/dasboard-candidato')
    }
    return(
        <>
        <section class="Login-page account">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="block text-center">
                    <a class="logo_Jobinder" href="index.html">
                        <img src={logo} alt=""/>
                    </a>
                    <h2  class="text-center text-dark">Bienvenido de vuelta!</h2>
                    <form class="text-left clearfix">
                        <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="text-center">
                            <div className="buttons_actions d-grid">  
                                    <button type="submit" className="buttons btn btn-info btn-lg" onClick={handleLogin}>Enviar</button>               
                                </div>
                        </div>
                    </form>
                    <Link to={`/registerCandidate`}>
                    <p class="mt-20">No tienes una cuenta?<a href="#"> Crea una con nosotros</a></p>
                    </Link>
                    </div>
                </div>
                <div class="col-md-6 col-md-offset-3">
                    <div class="block text-center  shadow-none">
                    <img className="container w-100 h-50" src={login}/>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default LoginCandidate