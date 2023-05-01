import React from "react";
import logo from './img/logo.png'
import register from './img/14.png'
import './scss/style.scss'

export const RegisterRecruiter=()=>{
    return(
        <>
        <section class="signin-page account">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
                <div class="block text-center">
                <a class="logo_Jobinder" href="index.html">
                    <img src={logo} alt=""/>
                </a>
                <h2 class="text-center">Bienvenido</h2>
                <form class="text-left clearfix">
                    <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="RFC"/>
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Confirmar Password"/>
                    </div>
                    <div class="text-center">
                    <div className="buttons_actions d-grid">  
                        <button type="submit" className="buttons btn btn-info btn-lg">Enviar</button>               
                    </div>
                  </div>
                </form>
                <p class="mt-20">Ya tienes una cuenta?<a href="#"> Accede</a></p>
                <p><a href="">No recuerdo mi password!</a></p>
                </div>
              </div>
            <div class="col-md-6 col-md-offset-3">
                <div class="block text-center  shadow-none">
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