import React from "react";
import imgProfile from "../../../Recruiter/assets/img/perfil2.jpg";
import "../scss/style.scss";
import { UseForm } from "../../hooks/useForm";

const initialForm = {};
const validationsForm = (form) => {};
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
              </div>
              <div className="col">
                <div className="form-outline">
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
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline bg-gray">
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
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Escolaridad
                  </label>
                  <select id="escolaridad" className="form-control">
                    <option>Selecciona</option>
                    <option>Maestria</option>
                    <option>Licenciatura</option>
                    <option>Carrera Técnica</option>
                  </select>
                </div>
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
