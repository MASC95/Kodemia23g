import imgProfile from "../../../Recruiter/assets/img/perfil2.jpg";
import "../scss/style.scss";
//import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
//import { useFormik } from "formik";
import axios from "axios";
import { Component, useEffect, useState } from "react";
import { endpointsGral } from "../../../Recruiter/services/vacancy";
import UploadImage from "../../../UploadImage/UploadImage";
import useJob from "../../../../hooks/useJob";

const localEndPoint = "http://localhost:4000/api/v1/users/";

const initDataForm = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  age: "",
  working_experience: "",
  bachelor: "",
  avatar_url: "",
};

const FormRecruiter = () => {
  const [imageUser, setImageUser] = useState(null);
  const [dataCandidate] = useJob();
  const [dataForm, setDataForm] = useState(initDataForm);

  useEffect(() => {
    
   
    if (dataCandidate) {
      console.log("dataCandidate:..", dataCandidate);
      setDataForm({
        name: dataCandidate.name||'',
        last_name: dataCandidate.last_name||'',
        email: dataCandidate.email||"",
        password: dataCandidate.password||"",
        age: dataCandidate.age||"",
        working_experience: dataCandidate.working_experience||"",
        bachelor: dataCandidate.bachelor||"",
        avatar_url: dataCandidate.avatar_url||"",
      });
    }
  }, [dataCandidate]);

  useEffect(() => {
    if (imageUser) {
      console.log(imageUser);
      agregarImagen();
    }
  }, [imageUser]);
  useEffect(()=>{
    if(dataForm) console.log('dataForm:..',dataForm);
  },[dataForm])

  const agregarImagen = () => {};
  /**
   * .required("Requerido")
        .min(8, "La contraseña debe tener al menos 8 caracteres")
   * .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
        ) */
  /* const formik = useFormik({
    initialValues: dataForm,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("El Nombres es Requerido")
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre debe tener como máximo 50 caracteres"),
      lastName: Yup.string()
        .required("El Apellido es Requerido")
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .max(50, "El apellido debe tener como máximo 50 caracteres"),
      email: Yup.string()
        .required("El correo electrónico es requerido")
        .email("ingrese un correo electrónico válido"),
      password: Yup.string(),
      age: Yup.number()
        .required("El campo es requerido")
        .min(18, "Debe ser mayor de 18 años"),
      exp: Yup.string().required("Ingrese una experiencia válida"),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      //console.log("values:..", values);
      
    },
  }); */

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate.access_token}`;
      const formData = new FormData();
      if (imageUser) formData.append("image", imageUser);
      Object.entries(dataForm).forEach(([key, value]) => {
        formData.append(key, value);
        //console.log(key,value);
      });
      axios
        .patch(`${localEndPoint}${dataCandidate.access_token}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("response.data:..", response.data);
        })
        .catch((error) => {
          console.error(error);
        });


    } catch (error) {
      console.log('error:..',error);
    }
  }

  const handleChange = (e)=>{
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    
      <div className="row container_form_General m-5">
        <div className="col-4 container_image ">
          {!imageUser && (
            <>
              <div className="ppic-container">
                <img src={dataForm.avatar_url?dataForm.avatar_url:imgProfile} alt="imgProfile" />
              </div>
              <p className="allowed-files">
                Archivos permitidos .png, .jpg, jpeg
              </p>
            </>
          )}

          <div className="buttons_actions d-flex justify-content-center gap-3">
            <UploadImage setDataImg={setImageUser} />
          </div>
        </div>
        <div className="col">
          
            <Form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-gray">
                    <label className="form-label" htmlFor="form6Example1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nombre"
                      className={`form-control `}
                      value={dataForm.name||''}
                      onChange={handleChange}
                    />
                    
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form6Example1">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Apellido"
                      name="last_name"
                      className={`form-control`}
                      value={dataForm.last_name||''}
                      onChange={handleChange}
                      
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="div-outline bg-gray">
                    <label className="form-label" htmlFor="form6Example1">
                      Edad:
                    </label>
                    <input
                      type="text"
                      id="age"
                      placeholder="Edad"
                      name="age"
                      className={`form-control`}
                      value={dataForm.age||''}
                      onChange={handleChange}
                      
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form6Example1">
                      Escolaridad
                    </label>
                    <select
                      className={`form-control`}
                      name="bachelor"
                      id="escolaridad"
                      value={dataForm.bachelor||''}
                      onChange={handleChange}
                      
                    >
                      <option>Selecciona</option>
                      <option value={'Maestria'}>Maestria</option>
                      <option value={'Licenciatura'}>Licenciatura</option>
                      <option value={'Carrera Técnica'}>Carrera Técnica</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-gray">
                    <label className="form-label" htmlFor="form6Example1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      name="email"
                      className={`form-control `}
                      value={dataForm.email||''}
                      onChange={handleChange}
                      
                    />
                    
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form6Example1">
                      Reset Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Reset Password"
                      name="password"
                      className={`form-control `}
                      value={dataForm.password||''}
                      onChange={handleChange}
                      
                    />
                    
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form6Example2">
                      Experiencia
                    </label>
                    <input
                      type="text"
                      id="exp"
                      placeholder="Experiencia"
                      name="working_experience"
                      className={`form-control `}
                      value={dataForm.working_experience||''}
                      onChange={handleChange}
                      
                    />
                  </div>
                </div>
              </div>
              <div className="buttons_actions d-flex justify-content-center gap-3">
                {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}

                <button
                  type="submit"
                  className="buttons btn btn-info text-light"
                  value="enviar"
                >
                  Guardar
                </button>
              </div>
            </Form>
          
        </div>
      </div>

    
    
    </>
  );
};

export default FormRecruiter;
