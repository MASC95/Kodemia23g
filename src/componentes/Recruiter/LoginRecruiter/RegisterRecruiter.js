import { useState, useEffect } from "react";
import logo from "./img/logo.png";
import register from "./img/14.png";
import "./scss/style.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { endpointsGral } from "../services/vacancy";
import useJob from "../../../hooks/useJob";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const initDataForm = {
  email: "",
  password: "",
  confirmPassword: "",
  role: "empresa",
  code: "",
  backCode: "",
};

const profileSchema = Yup.object().shape({
  email: Yup.string()
    .required("Favor de ingresar correo")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Favor de Ingresar un email valido"
    ),
  password: Yup.string()
    .required("Ingresar el password")
    .min(8, "El password debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "La contraseña debe tener entre 8 y 10 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    ),
  confirmPassword: Yup.string()
    .required("Confirma Password")
    .min(8, "El password debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "La contraseña debe tener entre 8 y 10 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    )
    .oneOf([Yup.ref("password"), null], "El password no coincide"),
});

export const RegisterRecruiter = () => {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState(initDataForm);
  const [showPassword, setShowPassword] = useState(false);

  const [isResgitering, setIsResgitering] = useState(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const [isInformationUser, setInformationUser] = useState([]);
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  const fetchUser = async () => {
    const response = await axios.get(
      `${endpointsGral.userURL}getAllUserOutPaginate`
    );
    const dataInformation = response.data;
    if (dataInformation) {
      setInformationUser(dataInformation);
    } else {
      //console.log("error infoSkill");
    }
  };
  useEffect(() => {
    // if()
    fetchUser();
  }, []);

  useEffect(() => {
    if (
      dataForm.code !== "" &&
      dataForm.code.trim() === String(dataForm.backCode)
    ) {
      setIsConfirmEmail(true);
    } else {
      setIsConfirmEmail(false);
    }
  }, [dataForm.code, dataForm.backCode]);

  const onFormInputChange = (event) => {
    const Input = event.target.id;
    const InputValue = event.target.value;

    setDataForm({
      ...dataForm,
      [Input]: InputValue,
    });
  };
  const searchUserInDB = async (email) => {
    try {
      const response = await axios.get(
        `${endpointsGral.userURL}getUserByEmail?email=${email}`
      );
      console.log("response searchUserInDB:..", response);
      if (response?.data?.user) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const confirmAccesCode = async (values) => {
    //console.log("Estamos confirmando el email:..");
    const { confirmEmail } = endpointsGral;
    const dataLogin = {
      email: values.email,
    };
    try {
      const response = await axios.post(confirmEmail, dataLogin);
      //console.log("responseConfirmEmail:..", response);
      setDataForm({
        ...values,
        backCode: response?.data?.code,
      });
    } catch (error) {
      //console.log(error);
    }
  };
  const handleSubmit = async (values) => {
    //console.log("values from formik", values);
    // console.log('aqui debe haber datos', values)
    const dataRepet = await searchUserInDB(values.email);

    /* = isInformationUser.some(
      (item) => item.email === values.email
    ); */
    if (dataRepet === true) {
      Swal.fire({
        icon: "error",
        title: "Error al registrar!",
        text: "Este correo ya tiene una cuenta, inicia sesión!",
      });
    } else {
      setIsResgitering(true);
      confirmAccesCode(values);
      //console.log("agregalo");
    }
  };

  const registerRecruiter = async () => {
    // if (formValues.role === "candidato") {
    try {
      const register = await axios.post(endpointsGral.registerUser, dataForm);
      setDataForm(register);
      //console.log("datos de Registro:..", register);
      setDataLocalStorage({ ...register?.data });
      if (dataForm.role === "candidato") {
        //console.log("pagina candidato");
        navigate(`/dashboard-candidato/home`);
      } else {
        //console.log("pagina empresa");
        navigate(`/Dashboard-recruiter/home`);
      }
    } catch (error) {
      swal({
        title: "Error al registrar!",
        icon: "error",
        button: "Aceptar",
      });
    }
  };

  const handleConfirmEmail = () => {
    //console.log("hola");
    //console.log("codigo:", dataForm.code);
    //console.log("codigo:", dataForm.code);
    //console.log("codigoBack:..", dataForm.backCode);
    if (dataForm.code === "") {
      Swal.fire({
        icon: "error",
        title: "Error al registrar código!",
        text: "Ingresa el código de verificación enviado a tu correo!",
      });
    } else {
      if (isConfirmEmail === true) {
        registerRecruiter();
        //console.log("Email confirmado con Exito:..");
      } else {
        //console.log("Codigo de acceso Erroneo:..");
        Swal.fire({
          title: "Error!",
          text: "Ingrese el código que se le envió a su correo",
          titleText: "Código de Acceso Incorrecto!",
          icon: "error",
          confirmButtonText: "Aceptar",
          target: "Ingrese un nuevo código",

          confirmButtonColor: "#04F06A",
        });
      }
    }
  };

  //Use Formik
  const loginInit = {
    backgroundImage:
      "url(https://frontjobinderimg.s3.amazonaws.com/A%C3%B1adir+un+t%C3%ADtulo.png)  ",
    fontFamily: "Poppins",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

    color: "#f2f2f2",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "750px",
    backgroundAttachment: "fixed",
  };

  const glass = {
    background: "rgba(0, 189, 214, 0.18)",
    borderRadius: "16px",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",

    marginBottom: "30px",
    height: "80%",
  };

  const logoJobinder = {
    background: "rgba(255, 255, 255, 0.21)",

    borderRadius: "12px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.2px)",
    WebkitBackdropFilter: "blur(5.2px)",
  };

  const imgContainer = {
    borderRadius: "5%",
    margin: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderWidth: "2px",
    borderStyle: "solid",
    background: "rgba(0, 189, 214, 0.18)",

    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    width: "100%",
    objectFit: "cover",
    borderImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    padding: "30px",
    marginTop: "130px",
  };

  const imgInside = {
    borderRadius: "30px",
    borderImage:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  };

  return (
    <>
      <section className="signin-page account" style={loginInit}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center" style={glass}>
                <div
                  style={logoJobinder}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Link to={"/"} className="logo_Jobinder">
                    <img src={logo} alt="jobinder-logo" />
                  </Link>
                </div>
                <h2 className="text-center">Crear cuenta</h2>
                <span>y empieza a seleccionar</span>
                <Formik
                  initialValues={dataForm}
                  enableReinitialize={true}
                  validationSchema={profileSchema}
                  onSubmit={handleSubmit}
                >
                  {(props) => (
                    <Form
                      className="text-left clearfix"
                      onSubmit={props.handleSubmit}
                    >
                      <Form.Group className="form-group">
                        <Form.Control
                          type="email"
                          className={`form-control rounded ${
                            props.touched.email && props.errors.email
                              ? "border border-danger"
                              : "border border-secondary"
                          }`}
                          id="email"
                          name="email"
                          placeholder="Escribe tu correo"
                          value={props.values.email}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                        />
                        <span className="text-danger input-group">
                          <ErrorMessage name="email" />
                        </span>
                      </Form.Group>

                      <Form.Group className="input-group">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          className={`form-control rounded ${
                            props.touched.password && props.errors.password
                              ? "border border-danger"
                              : "border border-secondary"
                          }`}
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={props.values.password}
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
                            borderRadius: "0px 5px 5px 0px",
                          }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <FaEyeSlash style={{ width: "30px" }} />
                          ) : (
                            <FaEye style={{ width: "30px" }} />
                          )}
                        </span>
                        <span className="text-danger input-group">
                          <ErrorMessage name="password" />
                        </span>
                      </Form.Group>

                      <Form.Group className="input-group">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          className={`form-control rounded ${
                            props.touched.confirmPassword &&
                            props.errors.confirmPassword
                              ? "border border-danger"
                              : "border border-secondary"
                          }`}
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirmar Password"
                          value={props.values.confirmPassword}
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
                            borderRadius: "0px 5px 5px 0px",
                          }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <FaEyeSlash style={{ width: "30px" }} />
                          ) : (
                            <FaEye style={{ width: "30px" }} />
                          )}
                        </span>
                        <span className="text-danger input-group text-center">
                          <ErrorMessage name="confirmPassword" />
                        </span>
                      </Form.Group>
                      {!isResgitering && (
                        <Button
                          type="submit"
                          className="buttons btn btn-info btn-lg m-3"
                        >
                          Enviar
                        </Button>
                      )}
                      {isResgitering && (
                        <>
                          <label className="text-white" htmlFor="code">
                            Captura el código que fue enviado a tu E-mail:
                          </label>
                          <input
                            type="text"
                            value={dataForm.code}
                            id="code"
                            onChange={onFormInputChange}
                            className="form-control"
                            placeholder="codigo de acceso"
                          />
                          <div className="buttons_actions d-grid">
                            <button
                              type="button"
                              onClick={handleConfirmEmail}
                              className="buttons btn btn-info btn-lg"
                            >
                              Confirmar
                            </button>
                          </div>
                        </>
                      )}
                      {/* {isResgitering &&(  
                              <>
                              <Form.Group className="form-group">
                                <Form.Control
                                   type="text" 
                                   className={`form-control rounded `} 
                                   id="text" 
                                   name="text"
                                   placeholder="Código de verficación"
                                   value={props.values.code}
                                  //  value={props.values.code}
                                  // //  onChange={props.handleChange}
                                  //  onBlur={props.handleBlur}
                                />
                                  <span className="text-danger">
                                      <ErrorMessage name='code'/>
                                  </span>
                            </Form.Group> 
                            <Button type="submit" className="buttons btn btn-info btn-lg">
                            Confirmar
                            </Button>
                              </>

                            )} */}
                    </Form>
                  )}
                </Formik>
                <p className="mt-20 ">
                  Ya tienes una cuenta?
                  <Link to={`/login-recruiter`}>Accede</Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <div
                className="block text-center  shadow-none"
                style={imgContainer}
              >
                <img
                  className="container w-100 h-50"
                  src="https://frontjobinderimg.s3.amazonaws.com/JobinderRegister.png"
                  alt="register-img"
                  style={imgInside}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterRecruiter;
