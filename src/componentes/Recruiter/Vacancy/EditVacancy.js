import React, { useEffect, useState } from "react";
import { endpointsGral } from "../services/vacancy";
import EditSkill from "../SoftSkills/Form/EditSkill";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useFormik } from "formik";
import * as Yup from "yup";
import useJob from "../../../hooks/useJob";
import { useParams } from "react-router-dom";
import UploadImage from "../../UploadImage/UploadImage";
import logo from "../../Recruiter/assets/img/perfil2.jpg";
import './style.scss'

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

const validations = Yup.object().shape({
  companyName: Yup.string().required("Requerido"),
  title: Yup.string().required("Requerido"),
  type: Yup.string().required("Requerido"),
  mode: Yup.string().required("Requerido"),
  city: Yup.string().required("Requerido"),
  salary: Yup.number().required("Requerido"),
  status: Yup.string().required("Requerido"),
  activities: Yup.string().required("Requerido"),
});

export const EditVacancy = () => {
  const navigate=useNavigate()
  const valores = window.location.search;
  const myVacancie = useParams("v");
  // console.log("myVacancie:..", myVacancie);
  const urlParams = new URLSearchParams(valores);
  const idVacancy = urlParams.get("v");

  const [listSkills, setListSkills] = useState([]);
  const [infoDataVacancy, setInfoDataVacancy] = useState({});
  const [dataForm, setDataForm] = useState(initDataForm);
  const [imageUser, setImageUser] = useState(null);
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  console.log("idVacancy:..", idVacancy);

  const fetchForVacancy = async () => {
    try {
      const endpointURL = `${endpointsGral.vacancyURL}${idVacancy}`;
      const response = await axios.get(endpointURL);
      // console.log("response:..", response);
      const skills = response.data["infoVacancy"];
      setInfoDataVacancy(skills);
      const retrievedSkills = skills?.job_skills.map((item) => {
        return { skill: item._id };
      });
      setListSkills([...retrievedSkills]);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    fetchForVacancy();
  }, []);
  useEffect(() => {
    console.log("cargado datos de las Skills  de  la Vacante:..");
  }, [listSkills]);

  console.log("data vancancy bd:..", infoDataVacancy);
  useEffect(() => {
    if (infoDataVacancy) {
      setDataForm({
        companyName: infoDataVacancy.companyName || "",
        avatar_url: infoDataVacancy.avatar_url || "",
        title: infoDataVacancy.title || "",
        type: infoDataVacancy.type || "",
        mode: infoDataVacancy.mode || "",
        city: infoDataVacancy.city || "",
        salary: infoDataVacancy.salary || "",
        status: infoDataVacancy.status || "",
        activities: infoDataVacancy.activities || "",
        job_skills: infoDataVacancy.job_skills || "",
      });
    }
  }, [infoDataVacancy]);

  // console.log("VALUES", dataForm);

  const formik = useFormik({
    initialValues: dataForm,
    enableReinitialize: true,
    validationSchema: validations,
    onSubmit: (values) => {
      const idsSkills = listSkills.map((item) => item.skill);
      const completeForm = {
        ...values,
        job_skills: [...idsSkills],
      };
    //   console.log("completeForm:...", completeForm);

      const formData = new FormData();
      if (imageUser) formData.append("image", imageUser);
      if (idsSkills) {
        for (let i = 0; i < idsSkills.length; i++) {
          formData.append("job_skills", idsSkills[i]);
        }
      }
      delete values.job_skills;
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      // console.log("idsSkills:..", idsSkills);
      for (const pair of formData.entries()) {
        // console.log(`${pair[0]}, ${pair[1]}`);
      }
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataRecruiter.accessToken}`;
      axios
        .patch(`${endpointsGral.vacancyURL}${idVacancy}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          // console.log(response);
          swal({
            title: "Vacante editada!!",
            icon: "success",
            button: "ok!",
          });
          navigate(`/Dashboard-Recruiter/vacancy`)
        })
        .catch((error) => {
          // console.log(error.response);
        });
    },
  });
  return (
    <div className="row container_form_General1 m-5 " id="formGral">
      <h2 className="text-dark d-sm-block h2">Editar Vacante</h2>
      <div className="col-4 container_image" id="container_image">
        {!imageUser && (
          <>
            {/* <div className="ppic-container"> */}
              <img
                src={dataForm.avatar_url ? dataForm.avatar_url : logo}
                alt="imgProfile"
              />
            {/* </div> */}
            <p className=" text-dark">
              {" "}
              Archivos permitidos .png, .jpg, jpeg{" "}
            </p>
          </>
        )}
        <div className="buttons_actions d-flex justify-content-center gap-3">
          <UploadImage setDataImg={setImageUser} />
        </div>
      </div>
      <div className="col">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline bg-gray">
                <label className="form-label text-dark" htmlFor="form6Example1">
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
                {formik.touched.companyName && formik.errors.companyName && (
                  <span className="text-danger">
                    {formik.errors.companyName}
                  </span>
                )}
              </div>
            </div>
            <div className="col">
              <div className="form-outline bg-gray">
                <label className="form-label text-dark" htmlFor="form6Example1">
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
            <div className="col">
              <div className="form-outline">
                <label className="form-label text-dark" htmlFor="form6Example1">
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
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <label className="form-label text-dark" htmlFor="form6Example1">
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
            <div className="col">
              <div className="form-outline">
                <label className="form-label text-dark" htmlFor="form6Example1">
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
                <label className="form-label text-dark" htmlFor="form6Example2">
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
                  <span className="text-danger">{formik.errors.salary}</span>
                )}
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <label className="form-label text-dark" htmlFor="form6Example2">
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
                <label className="form-label text-dark" htmlFor="form6Example1">
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

          <EditSkill listSkills={listSkills} setListSkills={setListSkills} />

          <div className="buttons_actions d-flex justify-content-end align-content-end">
            <button type="submit" className="buttons btn btn-info text-light">
              Guardar Vacante
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditVacancy;
