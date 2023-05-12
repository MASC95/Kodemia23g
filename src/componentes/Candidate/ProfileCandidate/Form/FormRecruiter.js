import React from "react";
import imgProfile from "../../../Recruiter/assets/img/perfil2.jpg";
import "../scss/style.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useFormik } from "formik";
import axios from "axios";



const FormRecruiter = () => {
    const formik = useFormik({
      initialValues: {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        age: '',
        exp: '',
        escolaridad: ''
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required('El Nombres es Requerido').min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre debe tener como máximo 50 caracteres'),
        apellido: Yup.string().required('El Apellido es Requerido').min(2, 'El apellido debe tener al menos 2 caracteres').max(50, 'El apellido debe tener como máximo 50 caracteres'),
        email: Yup.string().required('El correo electrónico es requerido').email('ingrese un correo electrónico válido'),
        password: Yup.string().required('Requerido').min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
        ),
        age: Yup.number().required('El campo es requerido').min(18, 'Debe ser mayor de 18 años'),
        exp: Yup.string().required('Ingrese una experiencia válida'),
      }),
      onSubmit: (values) => {
        /* alert(JSON.stringify(values, null, 2)); */
        axios.post('http://107.23.237.6/api/v1/users/', values)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error); // Aquí puedes manejar los errores de la solicitud
          });
      }
    });
      


  return (
    <>
      <div className="row container_form_General m-5">
        <div className="col-4 container_image ">
            <div className="p-pic-container d-flex justify-content-center" >
          <img src={imgProfile} alt="imgProfile" />
          </div>
          <p className="d-flex justify-content-center" >Archivos permitidos .png, .jpg, jpeg</p>
          <div className="buttons_actions d-flex justify-content-center gap-3">
            <button type="button" className="buttons btn btn-info text-light" style={{width:'18%', height: '3%' }} >
              Subir
            </button>
            <button type="button" className="buttons btn btn-danger" style={{width:'18n%', height: '3%' }}>
              Remover
            </button>
          </div>
        </div>
        <div className="col">
          <Formik {...formik}>

          <Form >
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline bg-gray" >
                  <label className="form-label" for="form6Example1">
                    Nombre
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    className={`form-control ${formik.touched.name && formik.errors.name ? 'border border-danger' : 'border border-secondary'}`}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (<span className='text-danger'>{formik.errors.name}</span>)}
                </div>
              
                
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Apellido
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    placeholder="Apellido"
                    name="lastName"
                    className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'border border-danger' : 'border border-secondary'}`}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
               
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="div-outline bg-gray">
                  <label className="form-label" for="form6Example1">
                    Edad:
                  </label>
                  <Field
                    type="text"
                    id="age"
                    placeholder="Edad"
                    name="age"
                    className={`form-control ${formik.touched.age && formik.errors.age ? 'border border-danger' : 'border border-secondary'}`}
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
          
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Escolaridad
                  </label>
                  <select className={`form-control ${formik.touched.type_work && formik.errors.type_work ? 'border border-danger':'border border-secondary' }`}
                                name="escolaridad"
                                id="escolaridad"
                                value={formik.values.escolaridad}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}> 
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
                <div className="form-outline bg-gray">
                  <label className="form-label" for="form6Example1">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'border border-danger' : 'border border-secondary'}`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Reset Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    placeholder="Reset Password"
                    name="password"
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'border border-danger' : 'border border-secondary'}`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <ErrorMessage name="password"/>
                </div>
               
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form6Example2">
                    Experiencia
                  </label>
                  <Field
                    type="text"
                    id="exp"
                    placeholder="Experiencia"
                    name="exp"
                    className={`form-control ${formik.touched.exp && formik.errors.exp ? 'border border-danger' : 'border border-secondary'}`}
                    value={formik.values.exp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
            
              </div>
            </div>
            <div className="buttons_actions d-flex justify-content-center gap-3">
              {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}

              <button type="submit" className="buttons btn btn-info text-light" value='enviar' >
                Guardar
              </button>
            </div>
          </Form>
        
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormRecruiter;
