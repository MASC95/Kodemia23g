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
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
    const response = await axios.get(endpointsGral.userURL);
    const dataInformation = response.data["item"];
    if (dataInformation) {
      setInformationUser(dataInformation["docs"]);
    } else {
      console.log("error infoSkill");
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

  const confirmAccesCode = async (values) => {
    console.log("Estamos confirmando el email:..");
    const { confirmEmail } = endpointsGral;
    const dataLogin = {
      email: values.email,
    };
    try {
      const response = await axios.post(confirmEmail, dataLogin);
      console.log("responseConfirmEmail:..", response);
      setDataForm({
        ...values,
        backCode: response?.data?.code,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (values) => {
    console.log("values from formik", values);
    // console.log('aqui debe haber datos', values)
    const dataRepet = isInformationUser.some(
      (item) => item.email === values.email
    );
    if (dataRepet) {
      Swal.fire({
        icon: "error",
        title: "Error al registrar!",
        text: "Este correo ya tiene una cuenta, inicia sesión!",
      });
    } else {
      setIsResgitering(true);
      confirmAccesCode(values);
      console.log("agregalo");
    }
  };

  const registerRecruiter = async () => {
    // if (formValues.role === "candidato") {
    try {
      const register = await axios.post(endpointsGral.registerUser, dataForm);
      setDataForm(register);
      console.log("datos de Registro:..", register);
      setDataLocalStorage({ ...register?.data });
      if (dataForm.role === "candidato") {
        console.log("pagina candidato");
        navigate(`/dashboard-candidato/home`);
      } else {
        console.log("pagina empresa");
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
    console.log("hola");
    console.log("codigo:", dataForm.code);
    console.log("codigo:", dataForm.code);
    console.log("codigoBack:..", dataForm.backCode);
    if (dataForm.code === "") {
      Swal.fire({
        icon: "error",
        title: "Error al registrar código!",
        text: "Ingresa el código de verificación enviado a tu correo!",
      });
    } else {
      if (isConfirmEmail === true) {
        registerRecruiter();
        console.log("Email confirmado con Exito:..");
      } else {
        console.log("Codigo de acceso Erroneo:..");
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

  return (
    <>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <Link to={"/"} className="logo_Jobinder">
                  <img src={logo} alt="" />
                </Link>
                <h2 className="text-center">Crear cuenta</h2>
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
                        <span className="text-danger">
                          <ErrorMessage name="email" />
                        </span>
                      </Form.Group>

                      <Form.Group className="form-group">
                        <Form.Control
                          type="password"
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
                        <span className="text-danger">
                          <ErrorMessage name="password" />
                        </span>
                      </Form.Group>

                      <Form.Group className="form-group">
                        <Form.Control
                          type="password"
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
                        <span className="text-danger">
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
                          <label className="text-dark" htmlFor="code">
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
                <p className="mt-20 text-black">
                  Ya tienes una cuenta?
                  <Link to={`/login-recruiter`}>Accede</Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center  shadow-none">
                <img className="container w-100 h-50" src={register} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterRecruiter;
