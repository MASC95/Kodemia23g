import React from "react";
import imgProfile from "../../../Recruiter/assets/img/perfil2.jpg";
import "../scss/style.scss";
import { UseForm } from "../../hooks/useForm";

const initialForm = {
    name: "",
    lastName: "",
    password: "",
    age: "",
    exp: "",
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexLastName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexAge = /^\d+$/;
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let regexExp = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es obligatorio";
    } else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' debe contener solo letras y espacios en blanco";
    }

    if (!form.lastname.trim()) {
        errors.lastName = "El campo 'Apellido' es obligatorio";
    } else if (!regexLastName.test(form.lastName.trim())){
        errors.lastName = "El campo 'Apellido' debe contener solo letras y espacios en blanco";
    }

    if (!form.password.trim()) {
        errors.password = "El campo 'email' es obligatorio";
    }
    else if (!regexPassword.test(form.password.trim())){
        errors.password = "Las contraseñas no coinciden "
    }

    if (!form.age.trim()) {
        errors.age = "El campo 'edad' es obligatorio";
    }
    else if (!regexAge.test(form.test.trim())){
        errors.age = "El campo 'edad' debe contener solo numeros y espacios en blanco";
    }

    if (!form.exp.trim()) {
        errors.exp = "El campo 'experiencia' es obligatorio";
    }
    else if (!regexExp.test(form.test.trim())){
        errors.exp = "El campo 'experiencia' debe contener solo numeros y espacios en blanco";
    }
    if (!form.email.trim()){
        errors.email = "El campo 'email' es obligatorio";
    }
    else if (!regexEmail.test(form.test.trim())){
        errors.email = "El campo 'email' debe contener un email valido";
    }


    return errors
};
export const FormRecruiter = () => {
  const {
    form,
    errors,
    Loading,
    Response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validationsForm);

  return (
    <>
      <div className="row container_form_General m-5">
        <div className="col-4 container_image ">
            <div className="p-pic-container d-flex justify-content-center" >
          <img src={imgProfile} alt="imgProfile" />
          </div>
          <p className="d-flex justify-content-center" >Archivos permitidos .png, .jpg, jpeg</p>
          <div className="buttons_actions d-flex justify-content-center gap-3">
            <button type="button" className="buttons btn btn-info text-light" style={{width:'15%', height: '3%' }} >
              Subir
            </button>
            <button type="button" className="buttons btn btn-danger" style={{width:'15%', height: '3%' }}>
              Remover
            </button>
          </div>
        </div>
        <div className="col">
          <form>
            <div className="row mb-4">
              <div className="col">
                <form className="form-outline bg-gray" onSubmit={handleSubmit} >
                  <label className="form-label" for="form6Example1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.name}
                    required
                  />
                </form>
                {errors.name && <div className="alert alert-warning d-flex justify-content-center" role="alert" style={{fontSize: '12px', fontWeight:'bold'}} >{errors.name}</div>}
              </div>
              <div className="col">
                <form className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    placeholder="Apellido"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.lastName}
                    required
                  />
                </form>
                {errors.lastName && <div className="alert alert-warning d-flex justify-content-center" role="alert" style={{fontSize: '12px', fontWeight:'bold'}} >{errors.lastName}</div>}
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <form className="form-outline bg-gray">
                  <label className="form-label" for="form6Example1">
                    Edad:
                  </label>
                  <input
                    type="text"
                    id="edad"
                    className="form-control"
                    placeholder="Edad"
                    name="age"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.age}
                    required
                  />
                </form>
                {errors.age && <div className="alert alert-warning d-flex justify-content-center" role="alert" style={{fontSize: '12px', fontWeight:'bold'}} >{errors.age}</div>}
              </div>
              <div className="col">
                <form className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Escolaridad
                  </label>
                  <select id="escolaridad" className="form-control">
                    <option>Selecciona</option>
                    <option>Maestria</option>
                    <option>Licenciatura</option>
                    <option>Carrera Técnica</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <form className="form-outline bg-gray">
                  <label className="form-label" for="form6Example1">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.email}
                    required
                  />
                </form>
                {errors.email && <div className="alert alert-warning d-flex justify-content-center" role="alert" style={{fontSize: '12px', fontWeight:'bold'}} >{errors.email}</div>}
              </div>
              <div className="col">
                <form className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Reset Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Reset Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.password}
                    required
                  />
                </form>
                {errors.password && <div className="alert alert-warning d-flex justify-content-center" role="alert" style={{fontSize: '12px', fontWeight:'bold'}} >{errors.password}</div>}
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <form className="form-outline">
                  <label className="form-label" for="form6Example2">
                    Experiencia
                  </label>
                  <input
                    type="text"
                    id="experencia"
                    className="form-control"
                    placeholder="Experiencia"
                    name="exp"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={form.exp}
                    required
                  />
                </form>
                {errors.exp && <div className="alert alert-warning d-flex justify-content-center" role="alert" style={{fontSize: '12px', fontWeight:'bold'}} >{errors.exp}</div>}
              </div>
            </div>
            <div className="buttons_actions d-flex justify-content-center gap-3">
              {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}

              <button type="button" className="buttons btn btn-info text-light" value='enviar' >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FormRecruiter;
