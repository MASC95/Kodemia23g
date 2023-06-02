import React from "react";
import login from './img/login.png'
import logo from './img/logo.png'
import './scss/style.scss'
import { Link, useNavigate } from "react-router-dom";

export const LoginCandidate = ()=>{

    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        // console.log(e.target)
        navigate('/dashboard-candidato')
    }
    return(
        <>
        <section className="Login-page account">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center">
                    <Link to={'/'}>
                    <a className="logo_Jobinder" href="#!">
                        <img src={logo} alt=""/>
                    </a>
                     </Link>
                    <h2  class="text-center text-dark">Bienvenido de vuelta!</h2>
                    <form class="text-left clearfix" onSubmit={handleLogin} >
                        <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"/>

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
                    <p className="mt-20 text-black text-decoration-none">No tienes una cuenta?
                    <Link to={`/register-candidato`}>
                    <a href="#"> Crea una con nosotros</a>
                    </Link>
                    </p>
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
export default LoginCandidate