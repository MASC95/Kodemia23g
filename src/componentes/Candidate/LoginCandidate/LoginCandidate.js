import { useState } from "react";
import login from "./img/login.png";
import logo from "./img/logo.png";
import "./scss/style.scss";
import { Link, useNavigate } from "react-router-dom";
import useJob from "../../../hooks/useJob";
import endpoints from "../../Recruiter/services/endpoints";
import swal from "sweetalert";


const initFormValues= {
  email: "",
  password: "",
}


export const LoginCandidate = () => {
  const [formValues, setFormValues] = useState({...initFormValues});

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
      ...initFormValues
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    initLogin();
  };
  const initLogin = async () => {
    try {
      if (formValues.email!==''&&formValues.password!=='') {
        console.log('formValues:..',formValues);
        const loginCandidate = await endpoints.loginAxios(formValues);
        setFormValues(loginCandidate);

        console.log("loginCandidate:..", loginCandidate);

        setDataLocalStorage({ ...loginCandidate });

        
        const role = dataCandidate.role;
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
  return (
    <>
      <section className="Login-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <Link to={"/"} className="logo_Jobinder">
                  <img src={logo} alt="" />
                </Link>
                <h2 className="text-center text-dark welcome-back">
                  Bienvenido de vuelta!
                </h2>
                <form
                  className="text-left clearfix"
                  id="formCandidate"
                  onSubmit={onFormSubmit}
                >
                  <div className="form-group">
                    <input
                      type="email"
                      value={formValues.email}
                      onChange={onFormInputChange}
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      value={formValues.password}
                      onChange={onFormInputChange}
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
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
                <p className="mt-20 text-black text-decoration-none">
                  No tienes una cuenta?
                  <Link to={`/register-candidato`}>Crea una con nosotros</Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center  shadow-none">
                <img className="container w-100 h-50" src={login} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginCandidate;
