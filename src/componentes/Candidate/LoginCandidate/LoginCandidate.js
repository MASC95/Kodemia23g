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
import Navbar from "../../Landing/Navbar/Navbar";

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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
        //console.log("loginCandidate(checando user_skills):..", loginCandidate);

        const role = loginCandidate?.role;
        if (role === "candidato") {
          swal({
            title: "Bienvenido de vuelta!",
            icon: "success",
            button: "ok!",
          });
          setDataLocalStorage({ ...loginCandidate });
          navigate("/dashboard-candidato/search");
          // resetForm();
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
  return (
    <>
      <Navbar />
      <section
        className="Login-page account"
        style={{
          fontFamily: "Poppins",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          color: "#000000",
        }}
      >
        <div className="container ">
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-md-7 col-md-offset-3  ">
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
                <Link to={"/"} className="logo_Jobinder">
                  <img src={logo} alt="" />
                </Link>

                <h2 className="text-center welcome-back ">
                  Bienvenido Candidato!
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
                      <p className="mt-20  text-decoration-none">
                        No tienes una cuenta?
                        <Link to={`/register-candidato`}>
                          Crea una cuenta con nosotros.
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
                    </form>
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
export default LoginCandidate;
