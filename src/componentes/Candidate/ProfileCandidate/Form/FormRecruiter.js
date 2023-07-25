//import imgProfile from "../../../Recruiter/assets/img/perfil2.jpg";
import "../scss/style.scss";
import { Formik, Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
//import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import { endpointsGral } from "../../../Recruiter/services/vacancy";
import UploadImage from "../../../UploadImage/UploadImage";
import useJob from "../../../../hooks/useJob";
import "../SkillsSection.js";
//import SkillsSection from "../SkillsSection.js";
//import Softskills from "../../../Recruiter/SoftSkills/Form/SoftSkills";
import { FaUserCircle } from "react-icons/fa";
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import TableSkillsCandidate from "../TableSkillsCandidate/TableSkillsCandidate";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TableExperience from "./TableExperience";
import { useMediaQuery } from "react-responsive";
//const localEndPoinst = "http://localhost:4000/api/v1/users/";

const defaultPassword = "";

const initDataForm = {
  name: "",
  last_name: "",
  email: "",
  resetPassword: defaultPassword,
  password: "",
  age: "",
  bachelor: "",
  avatar_url: "",
};

/*

password: Yup.string().required('Requerido').min(8, 'La contraseña debe tener al menos 8 caracteres')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
  ),
*/
//working_experience: Yup.string().required("Ingrese una experiencia válida"),

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
  resetPassword: Yup.string(),
  age: Yup.number()
    .required("El campo es requerido")
    .min(18, "Tu edad debe ser mayor a 18 años"),
});

const FormRecruiter = () => {
  const [listSkills, setListSkills] = useState([]);
  const [dataForm, setDataForm] = useState(initDataForm);
  const [imageUser, setImageUser] = useState(null);
  const [noPassword, setNoPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [dataExperience, setDataExperience] = useState([]);

  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  const tempDataExp = [
    {
      position: "dev",
      description: "soporte",
    },
  ];

  /* const parseExperience = (dataBackendExp)=>{
    console.log('datos del backend dataBackendExp:...',dataBackendExp)
    
    return tempDataExp
  } */

  useEffect(() => {
    if (dataCandidate) {
      // console.log("dataCandidate:..", dataCandidate);

      setDataForm({
        name: dataCandidate.name || "",
        last_name: dataCandidate.last_name || "",
        email: dataCandidate.email || "",
        password: "",
        resetPassword: noPassword,
        age: dataCandidate.age || "",
        bachelor: dataCandidate.bachelor || "",
        avatar_url: dataCandidate.avatar_url || "",
      });
    }

    if (dataCandidate.working_experience) {
      setDataExperience([...dataCandidate.working_experience]);
    }
  }, [dataCandidate]);

  useEffect(() => {
    // console.log("datos en dataForm:..", dataForm);
  }, [dataForm]);

  useEffect(() => {
    if (listSkills.length === 0) {
      // console.log('Actualizando skillsCandidate:..')
      if (dataCandidate?.user_skills?.length > 0) {
        setListSkills([...dataCandidate.user_skills]);
      }
    }
  }, [listSkills]);

  const handleSubmit = async (values) => {
    //e.preventDefault();

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
          const idsSkills = listSkills.map((item) => item._id);
          // console.log('values form(Candidate):..',values);
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
            if (dataExperience) {
              console.log('Agregando dataExperience:...',dataExperience);
              for (let i = 0; i < dataExperience.length; i++) {
                formData.append(
                  "working_experience",
                  JSON.stringify(dataExperience[i])
                );
              }
              if(dataExperience.length===0){
                formData.append(
                  "working_experience",
                  'none'
                );
              }
            }
            console.log('data experencie',dataExperience)
            Object.entries(values).forEach(([key, value]) => {
              formData.append(key, value);
              // console.log(key,value);
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

                if (response?.data?.message === "Update User Ok") {
                  if (response?.data?.updateUser) {
                    // console.log("setDatalocalStorage updatedUser:...");
                    setDataLocalStorage({
                      ...response?.data?.updateUser,
                      accessToken: dataCandidate.accessToken,
                    });
                  }
                }
              })
              .catch((error) => {
                console.error(error);
              });
          } catch (error) {
            //console.log("error:..", error);
          }

          // swal.fire("Los cambios han sido guardados correctamente!");
          swal({
            title: "Felicidades!",
            text:'Ya puedes aplicar a vacantes!',
            icon: "success",
            button: "Aceptar",
          });
        }
      });
  };

  const handleResetPassword = () => {
    setIsResetPassword((prev) => !prev);
  };

  const isTablet = useMediaQuery({ query: "(max-width: 767px)" });
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const style = {
    borderRadius: "14%",
    margin: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderWidth: "2px",
    borderStyle: "solid",
    width: isMobileOrTablet ? "40vw" : "20vw ",
    maxHeight: "300px",
    objectFit: "cover",
    borderImage:
      "radial-gradient(circle 588px at 31.7% 40.2%, rgba(225, 200, 239, 1) 21.4%, rgba(163, 225, 233, 1) 57.1%)",
  };

  return (
    <div>
      
      <div
        className={` ${
          isTablet
            ? "d-flex justify-content-center align-items-center mt-3"
            : "d-flex flex-start mt-3"
        }`}
      >
        <h1
          className="text-start ms-2"
          style={{
            color: "#498BA6",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva,Tahoma",
          }}
        >
          Perfil
        </h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <div>
            {dataForm.avatar_url && !imageUser && (
              <img
                style={style}
                src={dataForm.avatar_url}
                alt="imgProfile"
                className="d-block ms-auto me-auto my-2 rounded"
              />
            )}
          </div>

          {!imageUser && !dataForm.avatar_url && (
            <FaUserCircle
              className="d-block ms-auto me-auto my-2"
              style={{
                borderRadius: "14%",
                margin: "20px",
                filter:
                  "drop-shadow(0px 54px 55px rgba(0, 0, 0, 0.25)) drop-shadow(0px -12px 30px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.12)) drop-shadow(0px 12px 13px rgba(0, 0, 0, 0.17)) drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.09))",
                borderWidth: "2px",
                borderStyle: "solid",
                width: "20vw",
                height: "auto",
                borderImage:
                  "radial-gradient(circle 588px at 31.7% 40.2%, rgba(225, 200, 239, 1) 21.4%, rgba(163, 225, 233, 1) 57.1%)",
              }}
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
            onSubmit={(values) =>
              // console.log('values form:..',values)
              handleSubmit(values)
            }
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit} autoComplete="off">
                <div
                  style={{
                    background: "rgba(0, 189, 214, 0.18)",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                    backdropFilter: "blur(2px)",
                    WebkitBackdropFilter: "blur(2px)",
                    padding: "50px",
                    marginBottom: "30px",
                    marginTop: "30px",
                  }}
                >
                  <div className="row mb-4 mt-3">
                    <div className="col na">
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
                          <span className="text-danger">
                            {props.errors.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline la">
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
                        {props.touched.last_name && props.errors.last_name && (
                          <span className="text-danger">
                            {props.errors.last_name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4 eys">
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
                        {props.touched.age && props.errors.age && (
                          <span className="text-danger">
                            {props.errors.age}
                          </span>
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
                      <div className="form-outline bg-gray e">
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
                        <input
                          autoComplete="false"
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
                          disabled={true}
                        />
                        {props.touched.email && props.errors.email && (
                          <span className="text-danger">
                            {props.errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col r">
                      <div className="form-outline">
                        <label
                          className="form-label"
                          htmlFor="resetPasswordProfile"
                          onClick={handleResetPassword}
                          style={{
                            color: "#498BA6",
                            cursor: "pointer",
                            fontFamily:
                              "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                          }}
                        >
                          Reset Password:
                        </label>
                        <div className={isResetPassword ? "d-flex" : "d-none"}>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="resetPasswordProfile"
                            autoComplete="new-password"
                            placeholder={noPassword}
                            name="resetPassword"
                            className={`form-control ${
                              props.touched.resetPassword &&
                              props.errors.resetPassword
                                ? "border border-danger"
                                : "border border-secondary"
                            }`}
                            value={props.values.resetPassword}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          />
                          <span
                            className="input-group-text "
                            style={{
                              color: "#f2f2f2",
                              backgroundColor: "#0093E9",
                              backgroundImage:
                                "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                            }}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <FaEyeSlash style={{ width: "30px" }} />
                            ) : (
                              <FaEye style={{ width: "30px" }} />
                            )}
                          </span>
                        </div>
                        <ErrorMessage name="resetPassword" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row mb-4">
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
                </div> */}
                <TableExperience
                  dataExperience={dataExperience}
                  setDataExpirience={setDataExperience}
                />

                <TableSkillsCandidate setDataListSkills={setListSkills} />

                {/* <Softskills
                  setListSkills={setListSkills}
                  isCandidate={true}
                  skillsCandidate={listSkills}
                /> */}

                <div className="buttons_actions d-flex justify-content-center gap-3">
                  {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}

                  <button
                    type="submit"
                    className="buttons btn btn-info text-light d-block ms-auto mb-5"
                    value="enviar"
                    id="save-changes"
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
