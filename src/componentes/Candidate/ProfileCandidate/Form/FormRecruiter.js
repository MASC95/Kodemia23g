import imgProfile from "../../../Recruiter/assets/img/perfil2.jpg";
import "../scss/style.scss";
import { Formik, Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { Component, useEffect, useState } from "react";
import { endpointsGral } from "../../../Recruiter/services/vacancy";
import UploadImage from "../../../UploadImage/UploadImage";
import useJob from "../../../../hooks/useJob";
import "../SkillsSection.js";
//import SkillsSection from "../SkillsSection.js";
import Softskills from "../../../Recruiter/SoftSkills/Form/SoftSkills";
import { FaUserCircle } from "react-icons/fa";
import swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import TableSkillsCandidate from "../TableSkillsCandidate/TableSkillsCandidate";
//const localEndPoinst = "http://localhost:4000/api/v1/users/";

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

const saveChanges = () => {
  swal
    .fire({
      title: "Mensaje de confirmación",
      text: "¿Estás seguro de que quieres guardar los cambios?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0CF574",
      cancelButtonColor: "#FF2F2F",
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        swal.fire("Los cambios han sido guardados correctamente!");
      }
    });
};

/*
password: Yup.string().required('Requerido').min(8, 'La contraseña debe tener al menos 8 caracteres')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
  ),
*/

const profileSchema = Yup.object().shape({
  name: Yup.string()
    .required("El Nombres es Requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre debe tener como máximo 50 caracteres"),
  last_name: Yup.string()
    .required("El Apellido es Requerido")
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido debe tener como máximo 50 caracteres"),
  email: Yup.string()
    .required("El correo electrónico es requerido")
    .email("ingrese un correo electrónico válido"),

  age: Yup.number()
    .required("El campo es requerido")
    .min(18, "Debe ser mayor de 18 años"),
  working_experience: Yup.string().required("Ingrese una experiencia válida"),
});

const FormRecruiter = () => {
  const [listSkills, setListSkills] = useState([]);
  const [dataForm, setDataForm] = useState(initDataForm);
  const [imageUser, setImageUser] = useState(null);
  const [dataCandidate] = useJob();

  useEffect(() => {
    if (dataCandidate) {
      // console.log("dataCandidate:..", dataCandidate);

      setDataForm({
        name: dataCandidate.name || "",
        last_name: dataCandidate.last_name || "",
        email: dataCandidate.email || "",
        password: dataCandidate.password || "",
        age: dataCandidate.age || "",
        working_experience: dataCandidate.working_experience || "",
        bachelor: dataCandidate.bachelor || "",
        avatar_url: dataCandidate.avatar_url || "",
      });
    }
  }, [dataCandidate]);

  useEffect(() => {
    if (listSkills.length === 0) {
      // console.log('Actualizando skillsCandidate:..')
      if (dataCandidate?.user_skills?.length > 0) {
        setListSkills([...dataCandidate.user_skills]);
      }
    }
  }, [listSkills]);

  const formik = useFormik({
    initialValues: dataForm,
    enableReinitialize: true,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El Nombres es Requerido")
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre debe tener como máximo 50 caracteres"),
      apellido: Yup.string()
        .required("El Apellido es Requerido")
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .max(50, "El apellido debe tener como máximo 50 caracteres"),
      email: Yup.string()
        .required("El correo electrónico es requerido")
        .email("ingrese un correo electrónico válido"),
      password: Yup.string()
        .required("Requerido")
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
        ),
      age: Yup.number()
        .required("El campo es requerido")
        .min(18, "Debe ser mayor de 18 años"),
      exp: Yup.string().required("Ingrese una experiencia válida"),
    }),
    onSubmit: (values) => {
      /* alert(JSON.stringify(values, null, 2)); */
      // console.log('values:..',values);
    },
  });

  const handleSubmit = async (values) => {
    //e.preventDefault();
    const idsSkills = listSkills.map((item) => item._id);
    const completeForm = {
      ...values,
      user_skills: [...idsSkills],
    };
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate.accessToken}`;
      const formData = new FormData();
      if (imageUser) formData.append("image", imageUser);
      if (idsSkills) {
        for (let i = 0; i < idsSkills.length; i++) {
          formData.append("user_skills", idsSkills[i]);
        }
      }
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
        //console.log(key,value);
      });
      axios
        .patch(
          `${endpointsGral.userURL}${dataCandidate.accessToken}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          // console.log("response.data:..", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      // console.log('error:..',error);
    }
  };

  return (
    <div className="">
      <h1
        className="text-start ms-2"
        style={{
          color: "#498BA6",
          textShadow:
            "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
          fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
        }}
      >
        Perfil
      </h1>
      <div className="row">
        <div className="col-12 col-md-4">
          {dataForm.avatar_url && !imageUser && (
            <img
              style={{ width: "20vw", height: "auto" }}
              src={dataForm.avatar_url}
              alt="imgProfile"
              className="d-block ms-auto me-auto my-2 rounded"
            />
          )}
          {/* {imageUser&&<img
                src={imageUser}
                alt="imgProfile"
                className="perfil-C d-flex justify-content-center border "
                
              />} */}
          {!imageUser && !dataForm.avatar_url && (
            <FaUserCircle
              className="d-block ms-auto me-auto my-2"
              style={{ width: "20vw", height: "auto" }}
            />
          )}

          <div className="buttons_actions d-flex justify-content-center gap-3">
            <UploadImage setDataImg={setImageUser} />
          </div>
          <p
            className="allowed-files w-100 text-center mt-3 "
            style={{
              color: "#106973",
              fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
            }}
          >
            Archivos permitidos .png, .jpg, jpeg
          </p>
        </div>

        <div className="col-12 col-md-8  px-5">
          <Formik
            initialValues={dataForm}
            enableReinitialize={true} // solo para formularios que sirven para editar informacion
            validationSchema={profileSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline bg-gray">
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        style={{
                          color: "#498BA6",
                          fontFamily:
                            "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                        }}
                      >
                        Nombre:
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        className={`form-control ${
                          props.touched.name && props.errors.name
                            ? "border border-danger"
                            : "border border-secondary"
                        }`}
                        value={props.values.name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                      {props.touched.name && props.errors.name && (
                        <span className="text-danger">{props.errors.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        style={{
                          color: "#498BA6",
                          fontFamily:
                            "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                        }}
                      >
                        Apellido:
                      </label>
                      <Field
                        type="text"
                        id="last_name"
                        placeholder="Apellido"
                        name="last_name"
                        className={`form-control ${
                          props.touched.last_name && props.errors.last_name
                            ? "border border-danger"
                            : "border border-secondary"
                        }`}
                        value={props.values.last_name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="div-outline bg-gray">
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        style={{
                          color: "#498BA6",
                          fontFamily:
                            "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                        }}
                      >
                        Edad:
                      </label>
                      <Field
                        type="text"
                        id="age"
                        placeholder="Edad"
                        name="age"
                        className={`form-control ${
                          props.touched.age && props.errors.age
                            ? "border border-danger"
                            : "border border-secondary"
                        }`}
                        value={props.values.age}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        style={{
                          color: "#498BA6",
                          fontFamily:
                            "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                        }}
                      >
                        Escolaridad:
                      </label>
                      <select
                        className={`form-control ${
                          props.touched.bachelor && props.errors.bachelor
                            ? "border border-danger"
                            : "border border-secondary"
                        }`}
                        name="bachelor"
                        id="bachelor"
                        value={props.values.bachelor}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      >
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
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        style={{
                          color: "#498BA6",
                          fontFamily:
                            "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                        }}
                      >
                        Email:
                      </label>
                      <Field
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        className={`form-control ${
                          props.touched.email && props.errors.email
                            ? "border border-danger"
                            : "border border-secondary"
                        }`}
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        style={{
                          color: "#498BA6",
                          fontFamily:
                            "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                        }}
                      >
                        Reset Password:
                      </label>
                      <Field
                        type="password"
                        id="password"
                        placeholder="Reset Password"
                        name="password"
                        className={`form-control ${
                          props.touched.password && props.errors.password
                            ? "border border-danger"
                            : "border border-secondary"
                        }`}
                        value={props.values.password}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label
                        className="form-label"
                        htmlFor="form6Example2"
                        style={{
                          color: "#498BA6",
                          fontFamily:
                            "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                        }}
                      >
                        Experiencia
                      </label>
                      <Field
                        type="text"
                        id="working_experience"
                        placeholder="Experiencia"
                        name="working_experience"
                        className={`form-control ${
                          props.touched.working_experience &&
                          props.errors.working_experience
                            ? "border border-danger"
                            : "border border-secondary"
                        }`}
                        value={props.values.working_experience}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    </div>
                  </div>
                </div>

                <TableSkillsCandidate/>

                {/* <Softskills
                  setListSkills={setListSkills}
                  isCandidate={true}
                  skillsCandidate={listSkills}
                /> */}

                <div className="buttons_actions d-flex justify-content-center gap-3">
                  {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}

                  <button
                    type="submit"
                    className="buttons btn btn-info text-light d-block ms-auto"
                    value="enviar"
                    id="save-changes"
                    onClick={saveChanges}
                  >
                    Guardar
                  </button>
                </div>
                {/* <SkillsSection/> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormRecruiter;
