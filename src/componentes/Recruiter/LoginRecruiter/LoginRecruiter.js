import React from "react";
import { endpoints } from "../services/endpoints";
import login from './img/login.png'
import logo from './img/logo.png'
import './scss/style.scss'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

export const LoginRecruiter=()=>{
    const [formValues,setFormValues]=useState({
        email:'',
        password:''
    })
    const navigate= useNavigate()
    const [isLoading,setLoading]=useState(true)
    const onFormInputChange=(event)=>{
        const inputID=event.target.id;
        const inputValue=event.target.value

        setFormValues({
            ...formValues,
            [inputID]:inputValue
        })
    }
    console.log(formValues)
    const importantData=(formValues.email!==''&& formValues.password!=='')
    const resetForm=()=>{
        setFormValues({
            email:'',
            password:''
        })
    }

    const onFormSubmit=(event)=>{
        event.preventDefault();
        loginCallback()     
         
    }

    const loginCallback=async()=>{
        try {
            if(importantData){
                console.log(formValues)
              const loginRecruiter=await axios.post(endpoints.loginRecruiter,formValues);
              console.log(loginRecruiter.data)
              localStorage.setItem('token',loginRecruiter.data.access_token)
              
              setFormValues(loginRecruiter.data)
              const id=loginRecruiter.data['_id']
              console.log(loginRecruiter.data['_id'])
              setLoading(false)
              resetForm()
              navigate(`/Dashboard-Recruiter/${id}`)
            }else{
                alert('Todos los datos son necesarios')
            }
          } catch (error) {
              console.log('error')
          }
    }

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
                    <form 
                        className="text-left clearfix"
                        id="formLoginRecruiter"
                        onSubmit={onFormSubmit}>
                        <div className="form-group">
                        <input type="email" 
                               className="form-control" 
                               id="email" 
                               name="email"
                               onChange={onFormInputChange}
                               value={formValues.email}
                               placeholder="Email"
                               />
                        </div>
                        <div className="form-group">
                        <input type="password" 
                               className="form-control" 
                               id="password" 
                               name="password"
                               value={formValues.password}
                               onChange={onFormInputChange}
                               placeholder="Password"/>
                        </div>
                        <div className="text-center">
                            <div className="buttons_actions d-grid">  
                                    <button type="submit" className="buttons btn btn-info btn-lg">Enviar</button>               
                                </div>
                        </div>
                    </form>
                    <Link to={`/registerRecruiter`}>
                    <p className="mt-20 text-decoration-none">No tienes una cuenta?<a href="!#"> Crea una con nosotros</a></p>
                    </Link>
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center  shadow-none">
                    <img className="container w-100 h-50" src={login} alt=""/>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default LoginRecruiter