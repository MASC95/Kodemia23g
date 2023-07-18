import { useState } from "react";
import login from "./img/login.png";
import logo from "./img/logo.png";
import "./scss/style.scss";
import { Link, useNavigate } from "react-router-dom";
import useJob from "../../../hooks/useJob";
import endpoints from "../../Recruiter/services/endpoints";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initFormValues = {
  email: "",
  password: "",
};

/*
.min(8, "El password debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    )*/

const profileSchema = Yup.object().shape({
  email: Yup.string()
    .required("Favor de ingresar el email")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Favor de Ingresar un email valido"
    ),
  password: Yup.string().required("Favor de Ingresar el password"),
});
export const LoginCandidate = () => {
  const [formValues, setFormValues] = useState({ ...initFormValues });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  const onFormInputChange = (event) => {
    const InputID = event.target.id;
    const InputValue = event.target.value;
    setFormValues({ ...formValues, [InputID]: InputValue });
  };

  const importantData = formValues.email !== "" && formValues.password !== "";
  const resetForm = () => {
    setFormValues({
      ...initFormValues,
    });
  };

  const onFormSubmit = (values) => {
    //e.preventDefault();

    //console.log("velues del Form:..", values);

    initLogin(values);
  };
  const initLogin = async (values) => {
    try {
      if (values.email !== "" && values.password !== "") {
        //console.log("formValues:..", formValues);
        const loginCandidate = await endpoints.loginAxios(values);
        setFormValues(loginCandidate);
        console.log("loginCandidate(checando user_skills):..", loginCandidate);
        setDataLocalStorage({ ...loginCandidate });
        const role = loginCandidate?.role;
        if (role === "candidato") {
          swal({
            title: "Bienvenido de vuelta!",
            icon: "success",
            button: "ok!",
          });
          resetForm();
          console.log("dashboard Candidato");
          navigate("/dashboard-candidato/home");
        } else {
          swal({
            title: "Error al acceder!",
            icon: "error",
            button: "ok!",
          });
        }
      } else {
        swal({
          title: "Todos los datos son requeridos!",
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
  //INICIAN LOS ESTILOS DEL REGISTER, ESTAN BIEN ORDENADOS

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
      <section className="Login-page account" style={loginInit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-md-offset-3">
              <div className="block text-center" style={glass}>
                <div
                  style={logoJobinder}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Link to={"/"} className="logo_Jobinder">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <h2 className="text-center text-white welcome-back">
                  Bienvenido de vuelta!
                </h2>
                <Formik
                  className="text-left clearfix"
                  id="formCandidate"
                  initialValues={formValues}
                  onSubmit={(values) => {
                    onFormSubmit(values);
                    values = {};
                  }}
                  validationSchema={profileSchema}
                  enableReinitialize={true}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <div className="form-group">
                        <input
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
                        <span className="text-danger">
                          <ErrorMessage name="email" />
                        </span>
                      </div>

                      <div className="input-group mb-3">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          placeholder="Password"
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
                      <span className="text-danger">
                        <ErrorMessage name="password" />
                      </span>

                      <div className="text-center">
                        <div className="buttons_actions d-grid">
                          <button
                            type="submit"
                            className="buttons btn btn-info btn-lg"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>

                <p className="mt-20 text-white text-decoration-none">
                  No tienes una cuenta?
                  <Link to={`/register-candidato`}>
                    Crea una cuenta con nosotros.
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-md-offset-3">
              <div
                className="block text-center  shadow-none"
                style={imgContainer}
              >
                <img
                  className="container w-100 h-50"
                  style={imgInside}
                  src={login}
                  alt="jobinder-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginCandidate;
