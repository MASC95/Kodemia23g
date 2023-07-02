// import PostVacancy from "./Forms/PostVacancy";
import { useState } from "react";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import Softskills from "../SoftSkills/Form/SoftSkills";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import UploadImage from "../../UploadImage/UploadImage";
import logo from "../../Recruiter/assets/img/perfil2.jpg";
import "./style.scss";

const initDataForm = {
  companyName: "",
  avatar_url: "",
  title: "",
  type: "",
  mode: "",
  city: "",
  salary: "",
  status: "",
  activities: "",
};
export const AddVacancy = () => {
  const [listSkills, setListSkills] = useState([]);
  const [imageUser, setImageUser] = useState(null);
  const [dataForm, setDataForm] = useState(initDataForm);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: dataForm,
    validationSchema: Yup.object({
      companyName: Yup.string().required("Requerido"),
      title: Yup.string().required("Requerido"),
      type: Yup.string().required("Requerido"),
      mode: Yup.string().required("Requerido"),
      city: Yup.string().required("Requerido"),
      salary: Yup.number().required("Requerido"),
      status: Yup.string().required("Requerido"),
      activities: Yup.string().required("Requerido"),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        console.log("...........", imageUser);

        if(!imageUser){
            swal({
                title: "Falta la Imagen!!",
                icon: "error",
                button: "ok",
              });
              return
        }

        const idsSkills = listSkills.map((item) => item.skill);
        const formData = new FormData();
        if (imageUser) formData.append("image", imageUser);
        if (idsSkills) {
          for (let i = 0; i < idsSkills.length; i++) {
            formData.append("job_skills", idsSkills[i]);
          }
        }
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });
        console.log("idsSkills:..", idsSkills);

        for (const pair of formData.entries()) {
          // console.log(`${pair[0]}, ${pair[1]}`);
        }
        console.log("...........", formData);

        axios
          .post(endpointsGral.vacancyURL, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            //   console.log(response);
            swal({
              title: "Vacante creada!!",
              icon: "success",
              button: "ok!",
            });
            navigate(`/Dashboard-Recruiter/vacancy`);
          })
          .catch((error) => {
            //   console.log(error.response);
          });
      }, 400);
    },
  });

  return (
    <>
      <div className="">
        <h1
          className="text-start ms-2 mt-3"
          style={{
            color: "#498BA6",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          Crear Vacante
        </h1>
        <div
          className="row"
          style={{
            color: "#106973",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          <div className="col-12 col-md-4">
            {!imageUser && (
              <>
                <img
                  style={{ width: "20vw", height: "auto" }}
                  src={dataForm.avatar_url ? dataForm.avatar_url : logo}
                  alt="imgProfile"
                  className="d-block ms-auto me-auto my-2 rounded"
                />
                <p
                  className="allowed-files w-100 text-center mt-3 "
                  style={{
                    color: "#106973",
                    fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                  }}
                >
                  {" "}
                  Archivos permitidos .png, .jpg, jpeg{" "}
                </p>
              </>
            )}
            <div className="buttons_actions d-flex justify-content-center">
              <UploadImage setDataImg={setImageUser} />
            </div>
          </div>
          <div className="col-12 col-md-8 px-5">
            <form
              onSubmit={formik.handleSubmit}
              style={{
                color: "#106973",
                fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
              }}
            >
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-gray">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example1"
                    >
                      Nombre de la Empresa
                    </label>
                    <input
                      type="text"
                      id="comapnyName"
                      name="companyName"
                      className={`form-control ${
                        formik.touched.companyName && formik.errors.companyName
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Empresa"
                    />
                    {formik.touched.companyName &&
                      formik.errors.companyName && (
                        <span className="text-danger">
                          {formik.errors.companyName}
                        </span>
                      )}
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline bg-gray">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example1"
                    >
                      Título
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className={`form-control ${
                        formik.touched.title && formik.errors.title
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Título"
                    />
                    {formik.touched.title && formik.errors.title && (
                      <span className="text-danger">{formik.errors.title}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example1"
                    >
                      Tipo de trabajo
                    </label>
                    <select
                      className={`form-control ${
                        formik.touched.type && formik.errors.type
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      name="type"
                      id="type"
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option> Selecciona</option>
                      <option> Tiempo Completo</option>
                      <option> Por proyecto</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example1"
                    >
                      Modalidad
                    </label>
                    <select
                      className={`form-control ${
                        formik.touched.mode && formik.errors.mode
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      id="mode"
                      name="mode"
                      value={formik.values.mode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option> Selecciona</option>
                      <option> Presencial</option>
                      <option> Remoto</option>
                      <option> Hibrído</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example1"
                    >
                      Ciudad
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`form-control ${
                        formik.touched.city && formik.errors.city
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      placeholder="Ciudad"
                    />
                    {formik.touched.city && formik.errors.city && (
                      <span className="text-danger">{formik.errors.city}</span>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example2"
                    >
                      Sueldo
                    </label>
                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      value={formik.values.salary}
                      onChange={formik.handleChange}
                      className={`form-control ${
                        formik.touched.salary && formik.errors.salary
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      placeholder="Sueldo"
                    />
                    {formik.touched.salary && formik.errors.salary && (
                      <span className="text-danger">
                        {formik.errors.salary}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example2"
                    >
                      Status
                    </label>
                    <select
                      className={`form-control ${
                        formik.touched.status && formik.errors.status
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      id="status"
                      name="status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option> Selecciona</option>
                      <option> Iniciado</option>
                      <option> Cerrado</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-dark"
                      htmlFor="form6Example1"
                    >
                      Actividades
                    </label>
                    <input
                      type="text"
                      id="actividades"
                      name="activities"
                      value={formik.values.activities}
                      onChange={formik.handleChange}
                      className={`form-control ${
                        formik.touched.activities && formik.errors.activities
                          ? "border border-danger"
                          : "border border-secondary"
                      }`}
                      placeholder="Actividades"
                    />
                    {formik.touched.activities && formik.errors.activities && (
                      <span className="text-danger">
                        {formik.errors.activities}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <Softskills setListSkills={setListSkills} skillsCandidate={[]} />

              <div className="buttons_actions d-flex justify-content-end align-content-end">
                <button
                  type="submit"
                  className="buttons btn btn-info text-light"
                >
                  Guardar VacanteROR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddVacancy;
