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
import ToDoList from "./Forms/ToDoList";
import "./style.scss";

const initDataForm = {
  companyName: "",
  avatar_url: "",
  title: "",
  type: "",
  mode: "",
  city: "",
  salary: "",
  status: "Iniciado",
  // activities: "",
};

const validations = Yup.object().shape({
  companyName: Yup.string().required("Requerido"),
  title: Yup.string().required("Requerido"),
  type: Yup.string().required("Requerido"),
  mode: Yup.string().required("Requerido"),
  city: Yup.string().required("Requerido"),
  salary: Yup.number().required("Requerido"),
  // status: Yup.string().required("Requerido"),
  // activities: Yup.string().required("Requerido"),
});

export const EditVacancy = () => {
  const navigate = useNavigate();
  const valores = window.location.search;
  const myVacancie = useParams("v");
  // console.log("myVacancie:..", myVacancie);
  const urlParams = new URLSearchParams(valores);
  const idVacancy = urlParams.get("v");

  const [listSkills, setListSkills] = useState([]);
  const [infoDataVacancy, setInfoDataVacancy] = useState({});
  const [dataForm, setDataForm] = useState(initDataForm);
  const [imageUser, setImageUser] = useState(null);
  const [dataActivities, setDataActivities] = useState([]);

  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  const stylePerfil = {
    borderRadius: "14%",
    margin: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderWidth: "2px",
    borderStyle: "solid",
    width: "20vw",
    maxHeight: "300px",
    objectFit: "cover",
    borderImage:
      "radial-gradient(circle 588px at 31.7% 40.2%, rgba(225, 200, 239, 1) 21.4%, rgba(163, 225, 233, 1) 57.1%)",
  };
  const style = {
    color: "#498BA6",
    fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
  };

  //console.log("idVacancy:..", idVacancy);

  const fetchForVacancy = async () => {
    try {
      const endpointURL = `${endpointsGral.vacancyURL}${idVacancy}`;
      const response = await axios.get(endpointURL);
      // //console.log("response:..", response);
      const skills = response.data["infoVacancy"];
      setInfoDataVacancy(skills);
      const retrievedSkills = skills?.job_skills.map((item) => {
        return { skill: item._id };
      });
      const retrieveTask = skills?.activities.map((element) => {
        return { task: element.task };
      });
      setListSkills([...retrievedSkills]);
      setDataActivities([...retrieveTask]);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    fetchForVacancy();
  }, []);
  useEffect(() => {
    //console.log("cargado datos de las Skills  de  la Vacante:..");
  }, [listSkills]);

  //console.log("data vancancy bd:..", infoDataVacancy);
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
        // activities: infoDataVacancy.activities || [],
        job_skills: infoDataVacancy.job_skills || "",
      });
    }
    if (infoDataVacancy.activities) {
      setDataActivities([...infoDataVacancy.activities]);
    }
  }, [infoDataVacancy]);

  // console.log("VALUES", dataForm);

  const formik = useFormik({
    initialValues: dataForm,
    enableReinitialize: true,
    validationSchema: validations,
    onSubmit: (values) => {
      const idsSkills = listSkills.map((item) => item.skill);
      // const idsTask= dataActivities.map(item)
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
      if (dataActivities) {
        for (let i = 0; i < dataActivities.length; i++) {
          formData.append("activities", JSON.stringify(dataActivities[i]));
        }
      }
      delete values.job_skills;
      delete values.activities;
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      // console.log("idsSkills:..", idsSkills);
      // for (const pair of formData.entries()) {
      //   // console.log(`${pair[0]}, ${pair[1]}`);
      // }
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
          navigate(`/Dashboard-Recruiter/vacancy`);
        })
        .catch((error) => {
          // console.log(error.response);
        });
    },
  });
  return (
    <>
      <div className="">
        <h2
          className="text-start ms-2 mt-3 px-2"
          style={{
            color: "#498BA6",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          Editar Vacante
        </h2>

        <div className="row">
          <div className="col-12 col-md-4">
            {!imageUser && (
              <>
                <img
                  style={stylePerfil}
                  // style={{ width: "20vw", height: "auto" }}
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
            <div className="buttons_actions d-flex justify-content-center gap-3">
              <UploadImage setDataImg={setImageUser} />
            </div>
          </div>
          <div
            className="col-12 col-md-8 px-5"
            style={{
              background: "rgba(0, 189, 214, 0.18)",
              borderRadius: "16px",
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              padding: "50px",
              marginBottom: "30px",
              height: "50%",
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline bg-gray">
                    <label
                      className="form-label"
                      htmlFor="form6Example1"
                      style={style}
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
                      className="form-label"
                      htmlFor="form6Example1"
                      style={style}
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
                      className="form-label"
                      htmlFor="form6Example1"
                      style={style}
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
                      className="form-label"
                      htmlFor="form6Example1"
                      style={style}
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
                      className="form-label"
                      htmlFor="form6Example1"
                      style={style}
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
                      className="form-label"
                      htmlFor="form6Example2"
                      style={style}
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
                {/* <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label"
                      htmlFor="form6Example2"
                      style={style}
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
                    </select>
                  </div>
                </div> */}
                <div className="col">
                  {/* <div className="form-outline">
                  <label className="form-label text-dark" htmlFor="form6Example1">
                    Actividades
                  </label>
                  <textarea
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
                </div> */}
                </div>
              </div>
              <ToDoList
                dataActivities={dataActivities}
                setDataActivities={setDataActivities}
              />{" "}
              <br></br>
              <EditSkill
                listSkills={listSkills}
                setListSkills={setListSkills}
              />
              <div className="buttons_actions d-flex justify-content-end align-content-end">
                <button
                  type="submit"
                  className="buttons btn btn-info text-light m-5"
                >
                  Guardar Vacante
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditVacancy;
