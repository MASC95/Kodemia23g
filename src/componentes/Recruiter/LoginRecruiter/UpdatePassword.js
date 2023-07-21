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
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const initData = {
  email: "",
  accessCode: "",
  userCode: "",
  password: "",
  confirmPassword: "",
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

export const UpdatePasswordRecruiter = () => {
  const { email } = useParams();
  const [accessCode, setAccessCode] = useState(null);
  const [isConfirmCode, setIsConfirmCode] = useState(false);
  const [dataFormUpdate, setDataFormUpdate] = useState(initData);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //     if (dataFormUpdate.email) {
  //       setDataFormUpdate({
  //         email: dataFormUpdate.email || "",
  //         password: dataFormUpdate.password || "",
  //         confirmPassword: dataFormUpdate.confirmPassword || "",
  //       });
  //     }
  //   }, [dataFormUpdate]);

  const navigate = useNavigate();
  useEffect(() => {
    if (email !== "none") {
      //console.log("Email USER:..", email);

      enviarCodigo(email);
    }
  }, []);

  useEffect(() => {
    if (accessCode !== "") {
      setDataFormUpdate({
        ...dataFormUpdate,
        accessCode: String(accessCode),
      });
    }
  }, [accessCode]);

  useEffect(() => {
    if (accessCode && dataFormUpdate.accessCode === dataFormUpdate.userCode) {
      setIsConfirmCode(true);
    }
  }, [dataFormUpdate.accessCode, dataFormUpdate.userCode]);

  useEffect(() => {
    if (email !== "none") {
      setDataFormUpdate({
        ...dataFormUpdate,
        email: email,
      });
    }
  }, [email]);

  const enviarCodigo = async (emailUser) => {
    const { confirmEmail } = endpointsGral;
    const dataLogin = {
      email: emailUser,
    };
    try {
      const response = await axios.post(confirmEmail, dataLogin);
      //console.log("responseConfirmEmail:..", response);
      const backCode = response?.data?.code;
      if (backCode) {
        setAccessCode(backCode);
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const handleChange = (e) => {
    setDataFormUpdate({
      ...dataFormUpdate,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (values) => {
    // e.preventDefault();
    //console.log("Valores del form(values):..", values);

    if (
      values.email !== "" &&
      values.password !== "" &&
      values.confirmPassword !== "" &&
      values.password===values.confirmPassword
    ) 
    {
      const { userURL } = endpointsGral;

      const tempData={
        email:values.email,
        password:values.password
      }
      
      //console.log("Valores del form(tempData):..", tempData);
      try {
        const response = await axios.post(
          `${userURL}updatePassword`,
          tempData
        );
        //console.log("response UpdatePassword:..", response);
        Swal.fire({
          icon: "success",
          title: "Contraseña actualizada!",
          text: "Bienvenido!",
        });
        navigate("/login-recruiter");
      } catch (error) {
        //console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error al actualizar!",
          text: "Contacta a soporte!",
        });
      }

    } else {
      Swal.fire({
        icon: "error",
        title: "Contraseñas vacias!",
        text: "Estos datos no pueden ir vacios!",
      });
    }
  };
  const handleSendCode = async(emailUser)=>{
    //console.log('enviando AccessCode:..');
    try {
      if(emailUser!==''){
        await enviarCodigo(emailUser)
      }
    } catch (error) {
      //console.log(error)
    }
  }

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
                <h3 className="text-center">Recuperar Contraseña</h3>
                <Formik
                  initialValues={dataFormUpdate}
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
                          //   value={dataFormUpdate.email}
                          //   onChange={handleChange}
                          value={props.values.email}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                        />
                        <span className="text-danger input-group">
                          <ErrorMessage name="email" />
                        </span>
                      </Form.Group>
                      {email === "none" && !accessCode && (
                        <div>
                          <Form.Label className="d-block">
                            Se te enviara un codigo a tu email.
                          </Form.Label>
                          <span className="btn btn-primary" onClick={()=>handleSendCode(props.values.email)}>
                            Enviar Codigo
                          </span>
                        </div>
                      )}
                      {accessCode && !isConfirmCode && (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail2"
                          >
                            <Form.Label>
                              Captura el código de acceso que fue enviado a tu
                              email:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Access Code"
                              name="userCode"
                              value={props.values.userCode}
                              onChange={handleChange}
                              onBlur={props.handleBlur}
                            />
                          </Form.Group>
                        </>
                      )}
                      {isConfirmCode && (
                        <>
                          <h4 className="fs-5 mt-3">
                            Ahora puedes ingresar tu nueva Contraseña
                          </h4>
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
                          <Button
                            variant="primary"
                            type="button"
                            onClick={()=>handleSubmit(props.values)}
                          >
                            Guardar
                          </Button>
                        </>
                      )}
                    </Form>
                  )}
                </Formik>
                {/* <p className="mt-20 text-black">
                  Ya tienes una cuenta?
                  <Link to={`/login-recruiter`}>Accede</Link>
                </p> */}
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

export default UpdatePasswordRecruiter;
