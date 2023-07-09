import { useEffect, useState } from "react";
import logo from "./img/logo.png";
import register from "./img/14.png";
import "./scss/style.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { endpointsGral } from "../../Recruiter/services/vacancy";
import useJob from "../../../hooks/useJob";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const RegisterCandidate = () => {
  const [isResgitering, setIsResgitering] = useState(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const [isInformationUser, setInformationUser] = useState([]);
  const navigate = useNavigate();
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const [showPassword, setShowPassword] = useState(false);

  const fetchUser = async () => {
    const response = await axios.get(endpointsGral.userURL);
    const infoSkill = response.data["item"];
    if (infoSkill) {
      setInformationUser(infoSkill["docs"]);
    } else {
      console.log("error infoSkill");
    }
  };
  useEffect(() => {
    // if()
    fetchUser();
  }, []);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    role: "",
    code: "",
    backCode: "",
    rfc: "",
  });

  useEffect(() => {
    if (
      formValues.code !== "" &&
      formValues.code === String(formValues.backCode)
    ) {
      setIsConfirmEmail(true);
    } else {
      setIsConfirmEmail(false);
    }
  }, [formValues.code, formValues.backCode]);

  const onFormInputChange = (event) => {
    const Input = event.target.id;
    const InputValue = event.target.value;

    setFormValues({
      ...formValues,
      [Input]: InputValue,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues.email);
    const dataRepet = isInformationUser.some(
      (item) => item.email === formValues.email
    );

    if (dataRepet) {
      Swal.fire({
        icon: "error",
        title: "Error al registrar!",
        text: "Este correo ya tiene una cuenta, inicia sesión!",
      });
    } else {
      setIsResgitering(true);
      confirmAccesCode();
      // console.log('agregalo')
    }
  };
  const importantData =
    formValues.email !== "" &&
    formValues.role !== "" &&
    formValues.password !== "";

  const resetForm = () => {
    setFormValues({
      email: "",
      password: "",
      role: "",
      code: "",
      backCode: "",
      rfc: "",
    });
  };

  const confirmAccesCode = async () => {
    console.log("Estamos confirmando el email:..");
    const { confirmEmail } = endpointsGral;
    const dataLogin = {
      email: formValues.email,
    };
    try {
      const response = await axios.post(confirmEmail, dataLogin);
      console.log("responseConfirmEmail:..", response);
      setFormValues({
        ...formValues,
        backCode: response?.data?.code,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const registerRecruiter = async () => {
    // if (formValues.role === "candidato") {
    try {
      if (importantData) {
        const register = await axios.post(
          endpointsGral.registerUser,
          formValues
        );
        setFormValues(register);
        resetForm();
        console.log("datos de Registro:..", register);
        setDataLocalStorage({ ...register?.data });
        if (formValues.role === "candidato") {
          console.log("pagina candidato");
          navigate(`/dashboard-candidato/home`);
        } else {
          console.log("pagina empresa");
          navigate(`/Dashboard-recruiter/home`);
        }
      } else {
        swal({
          title: "Todos los campos son requeridos!",
          icon: "error",
          button: "Aceptar",
        });
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
    console.log("codigo:", formValues.code);
    console.log("codigoBack:..", formValues.backCode);
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
  };

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
                <h2 className="text-center text-dark">
                  Crea tu cuenta y empieza a Aplicar!
                </h2>
                <form className="text-left clearfix" onSubmit={onFormSubmit}>
                  <div
                    className={`form-group ${
                      formValues.email === "" ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="email"
                      value={formValues.email}
                      onChange={onFormInputChange}
                      className={`form-control ${
                        formValues.email === "" ? "is-invalid" : ""
                      }`}
                      id="email"
                      placeholder="Email"
                    />
                    {formValues.email === "" && (
                      <div className="invalid-feedback">
                        Por favor, completa este campo.
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    {/* <label className="form-label" for="form6Example1">Role</label> */}
                    <select
                      className="form-control d-none"
                      id="role"
                      value={formValues.role}
                      onChange={onFormInputChange}
                    >
                      <option value="">Rol</option>
                      <option value="candidato">candidato</option>
                      <option value="empresa">empresa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      value={formValues.rfc}
                      onChange={onFormInputChange}
                      className="form-control d-none"
                      id="rfc"
                      placeholder="RFC"
                    />
                  </div>
                  <div
                    className={`form-group ${
                      formValues.password === "" ? "has-error" : ""
                    }`}
                  >
                    <div className="input-group mb-3">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formValues.password}
                        onChange={onFormInputChange}
                        className={`form-control ${
                          formValues.password === "" ? "is-invalid" : ""
                        }`}
                        id="password"
                        placeholder="Password"
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
                    {formValues.password === "" && (
                      <div className="invalid-feedback">
                        Por favor, completa este campo.
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    {!isResgitering && (
                      <div className="buttons_actions d-grid">
                        <button
                          type="submit"
                          className="buttons btn btn-info btn-lg"
                        >
                          Enviar
                        </button>
                      </div>
                    )}

                    {isResgitering && (
                      <>
                        <label className="text-dark" htmlFor="code">
                          Captura el código que fue enviado a tu E-mail:
                        </label>
                        <input
                          type="text"
                          value={formValues.code}
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
                  </div>
                </form>
                <p className="mt-20 text-black">
                  Ya tienes una cuenta? Accede como <br></br>
                  <Link to={`/login-recruiter`}>Reclutador /</Link>
                  <Link to={`/login-candidato`}> Candidato</Link>
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

export default RegisterCandidate;
