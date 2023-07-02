import {useState} from "react";
import logo from './img/logo.png'
import register from './img/14.png'
import './scss/style.scss'
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { endpointsGral } from "../services/vacancy";

export const RegisterRecruiter=()=>{
  const navigate =useNavigate()
  const [formValues, setFormValues]=useState({
    email:'',
    password:'',
    role:'empresa'
  })
  const onFormInputChange=(event)=>{
    const Input=event.target.id;
    const InputValue=event.target.value;

    setFormValues({
      ...formValues,[Input]:InputValue
    })
  }

  const onFormSubmit=(event)=>{
    event.preventDefault()
    registerRecruiter()
  }
  const importantData= (formValues.email!=='' &&
                        // formValues.rfc !==''&&
                        formValues.password!=='')

  const resetForm=()=>{
        setFormValues({
          email:'',
          password:'',
          role:'empresa'
         })
        }
  const registerRecruiter=async()=>{
    if(formValues.role==='candidato'){
      try {
      console.log(formValues)
      if(importantData){
        const register=await axios.post(endpointsGral.userURL,formValues);
        setFormValues(register)
        swal({
          title: "Bienvenido!",
          icon: "success",
          button: "ok!",
        });
        resetForm()
        console.log('pagina candidato')
      } else{
        swal({
          title: "Todos los campos son requeridos!",
          icon: "error",
          button: "ok!",
        });
      }
    } catch (error) {
      swal({
        title: "Error al registrar!",
        icon: "error",
        button: "ok!",
      });
    }
    }else{
      try {
        console.log(formValues)
        if(importantData){
          const register=await axios.post(endpointsGral.userURL,formValues);
          setFormValues(register)
          swal({
            title: "Bienvenido!",
            icon: "success",
            button: "ok!",
          });
          resetForm()
          console.log('pagina empresa')
        //  navigate(`/Dashboard-recruiter/home`)
        } else{
          swal({
            title: "Todos los campos son requeridos!",
            icon: "error",
            button: "ok!",
          });
        }
      } catch (error) {
        
      }
    }
  }


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
                <h2 className="text-center">Crear cuenta</h2>
                <form className="text-left clearfix" onSubmit={onFormSubmit}>
                    <div className="form-group">
                    <input type="email" 
                           value={formValues.email}
                           onChange={onFormInputChange}
                           className="form-control" 
                           id="email" 
                           placeholder="Email"/>
                           
                    </div>
                    {/* <div className="form-group">
                            <select className="form-control" id="role" value={formValues.role} onChange={onFormInputChange} >
                                <option value="" selected disabled>Rol</option>
                                <option value='candidato'>candidato</option>
                                <option value='empresa'>empresa</option>
                            </select>
                        </div> */}
                    {/* <div className="form-group">
                    <input type="text" 
                           value={formValues.rfc}
                           onChange={onFormInputChange}
                           className="form-control" 
                           id="rfc" 
                           placeholder="RFC"/>
                    </div> */}
                    <div className="form-group">
                    <input type="password" 
                           value={formValues.password}
                           onChange={onFormInputChange}
                           className="form-control" 
                           id="password" 
                           placeholder="Password"/>
                    </div>
                    <div className="text-center">
                    <div className="buttons_actions d-grid">  
                        <button type="submit" className="buttons btn btn-info btn-lg">Enviar</button>               
                    </div>
                  </div>
                </form>
                <p className="mt-20 text-black">Ya tienes una cuenta?
                <Link to={`/login-recruiter`}>
                 Accede
                </Link>
                </p>
                </div>
              </div>
            <div className="col-md-6 col-md-offset-3">
                <div className="block text-center  shadow-none">
                <img className="container w-100 h-50" src={register} alt=""/>
                </div>
            </div>
            </div>
          </div>
        </section>
        
        </>
    )

}

export default RegisterRecruiter