import React from "react";
import endpoints from "../services/endpoints";
import login from "./img/login.png";
import logo from "./img/logo.png";
import "./scss/style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useJob from "../../../hooks/useJob";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const profileSchema = Yup.object({
  email: Yup.string()
    .required("Favor de ingresar el Usuario")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Favor de Ingresar un email valido"
    ),
  password: Yup.string()
    .required("Ingresar el password")
    .min(8, "El password debe tener al menos 8 caracteres"),
});

const initialDataForm = {
  email: "",
  password: "",
};

export const LoginRecruiter = () => {
  const [dataForm, setDataForm] = useState(initialDataForm);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // const [formValues, setFormValues] = useState({
  //     email: "",
  //     password: "",
  //   });
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  const handleSubmit = async (values) => {
    try {
      const loginRecruiter = await endpoints.loginAxios(values);
      setDataForm(loginRecruiter);
      //console.log("loginRecruiter:..", loginRecruiter);

      const role = loginRecruiter?.role;
      if (role === "empresa") {
        swal({
          title: "Bienvenido de vuelta!",
          icon: "success",
          button: "ok!",
        });
        setDataLocalStorage({ ...loginRecruiter });
        // console.log("dashboard Recruiter");
        navigate("/Dashboard-Recruiter/vacancy");
      } else {
        swal({
          title: "Error al acceder!",
          icon: "error",
          button: "ok!",
        });
      }
    } catch (error) {
      swal({
        title: "Credenciales invalidas!",
        icon: "error",
        button: "ok!",
      });
    }
    // navigate('/dashboard-candidato')
  };

  return (
    <>
      <section
        className="Login-page account"
        style={{
          fontFamily: "Poppins",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          color: "#000000",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-7 col-md-offset-3">
              <div
                className="block text-center"
                style={{
                  borderRadius: "16px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                  marginBottom: "30px",
                  height: "80%",
                }}
              >
                +
                <Link to={"/"} className="logo_Jobinder">
                  <img src={logo} alt="" />
                </Link>
                <h2 className="text-center ">Bienvenido Reclutador</h2>
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
                        {/* <Form.Label>Email</Form.Label> */}
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

                      <Form.Group className="form-group input-group">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          className={`form-control rounded ${
                            props.touched.email && props.errors.email
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

                      <Button
                        type="submit"
                        className="buttons btn btn-info btn-lg m-3"
                      >
                        Enviar
                      </Button>
                      <p className="mt-20  text-decoration-none">
                        No tienes una cuenta?
                        <Link to={`/register-recruiter`}>
                          Crea una con nosotros
                        </Link>
                      </p>
                      <p className="mt-20  text-decoration-none">
                        Olvidaste tu Contraseña?
                        <Link
                          to={
                            props.values.email !== ""
                              ? `/update-password/${props.values.email}`
                              : `/update-password/none`
                          }
                        >
                          Cambia tu Contraseña.
                        </Link>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginRecruiter;
