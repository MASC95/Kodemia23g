import { React, useEffect, useState } from "react";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import { FaCheck, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import useJob from "../../../hooks/useJob";
import { myId } from "../../lib/myLib";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Swal from "sweetalert2";
import "./scss/style.scss";

import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
export const Candidate = () => {
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const idCandidate = urlParams.get("c");
  const idVacancy = urlParams.get("v");
  const navigate = useNavigate();
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();

  console.log(idCandidate);
  const [dataSkill, setDataSkill] = useState([]);
  const [infoCandidate, setInfoCandidate] = useState({});
  const [isDisable, setIsDisable] = useState(false);
  const [isHidePanel, setIsHidePanel] = useState(false);
  const queryByUsers = async () => {
    try {
      const response = await axios.get(
        `${endpointsGral.userURL}getUser/${idCandidate}`
      );
      console.log("response:...", response);
      const dataUser = response?.data;
      const objUser = dataUser?.user;
      /* console.log('objUsers:...',objUsers);
      console.log('idCandidate:..',idCandidate);
      const userFind = objUsers.find((value) => value._id === idCandidate); */
      if (objUser) setInfoCandidate(objUser);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("my vacancies", infoCandidate.my_vacancies);

  useEffect(() => {
    queryByUsers();
  }, []);

  const fetchSkill = () => {
    if (infoCandidate?.user_skills) {
      setDataSkill([...infoCandidate?.user_skills]);
    }
  };

  const queryPhase = async () => {
    const phases = ["Llamada", "Entrevista", "Pruebas", "Contratado"];
    let tempData = [];
    for (const phase of phases) {
      const endpointPhase = `${endpointsGral.phaseUrlGetPhase}?phase=${phase}`;
      try {
        const response = await axios.get(endpointPhase);
        console.log("Phase One, backend", response);
        const result = response?.data?.infoPhase?.vacancies;

        const dataInformationVacancy = result.find(
          (item) => String(item.idVacancie) === idVacancy
        );
        console.log(
          `dataInformationVacancy:..${phase}`,
          dataInformationVacancy
        );
        tempData = [...tempData, ...dataInformationVacancy?.applicants];
      } catch (error) {
        console.log(error);
      }
    }
    console.log("todos los applicantes en las 4 fases:..", tempData);
  };

  const handleOfPanel = (id) => {
    console.log(id);
    console.log(idVacancy);
    Swal.fire({
      title: "Panel de reclutamiento",
      text: "Estas seguro de agregar al candidato?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, agregar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer: ${dataRecruiter.accessToken}`;
          const response = await axios.patch(
            `${endpointsGral.phaseURL}?phase=Llamada&idVacancie=${idVacancy}&idCandidate=${id}`
          );
          console.log("responseBackend (candidato Agregado):..", response);
          if (response) {
            queryPhase();
          }
        } catch (error) {
          console.log(error);
        }
      }
      // console.log('lista de usuarios para reclutamiento',tempDataUser)
      navigate(`/Dashboard-Recruiter/details-match/?=${idVacancy}`);
      setIsDisable(true);

      // setButtonState("btn-outline-secondary")
    });
  };

  const handleOfHidePanel = (email) => {
    console.log("En el papa(index):", email);
    Swal.fire({
      title: "Ocultar candidato",
      text: "Estas seguro de ocultar esta candidato?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ocultar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer: ${dataRecruiter.accessToken}`;
          console.log("dataRecruiter.accessToken ", dataRecruiter.accessToken);
          const responseBack = await axios.post(
            `${endpointsGral.hideUserInVacancy}`,
            { idVacancy, idCandidate: idCandidate, emailUser: email }
          );
          console.log("responseBack HideUser:..", responseBack);
        } catch (error) {
          console.log(error);
        }
        setIsHidePanel(true);
        navigate(`/Dashboard-Recruiter/details-match/?=${idVacancy}`);
      } else {
        console.log("error al ocultar");
      }
    });
  };

  useEffect(() => {
    console.log("infoCandidate:...", infoCandidate);
    fetchSkill();
  }, [infoCandidate]);

  const data = dataSkill?.map((skill, i) => {
    return {
      id: skill._id,
      qty: `${i + 1}`,
      skill: skill.name,
      nivel: skill.level,
    };
  });

  const columns = [
    {
      name: "rowId",
      selector: (row) => row.id,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "#",
      selector: (row, i) => i + 1,
      sortable: true,
    },
    {
      name: "SKILL",
      selector: (row, i) => `${row.skill}`,
      sortable: true,
    },
    {
      name: "NIVEL",
      selector: (row, i) => row.nivel,
      sortable: true,
    },
  ];
  const tableData = {
    columns,
    data,
  };
  // console.log('userCompartive MAP',infoCandidate)
  // console.log('skills',dataSkill)

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
          Perfil Profesional
        </h1>

        {infoCandidate?.name && (
          <div
            className="row"
            style={{
              color: "#106973",
              fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
            }}
          >
            <div className="col-12 col-md-4">
              <img
                style={{ width: "20vw", height: "auto" }}
                src={infoCandidate?.avatar_url ? infoCandidate?.avatar_url : ""}
                alt="avatarImg"
                className="d-block ms-auto me-auto my-2 rounded"
              />
              <div className="">
                <p className="text-center text-dark">{`${infoCandidate.name} ${infoCandidate.last_name}`}</p>
                <p className="text-center text-dark">
                  <FaMailBulk /> {infoCandidate.email}
                </p>
              </div>
              <div className="buttons_actions d-flex justify-content-center gap-3">
                <button
                  type="button"
                  className="buttons btn btn-outline-success"
                  disabled={isDisable}
                  onClick={handleOfPanel.bind(this, infoCandidate._id)}
                >
                  <FaCheck className="icon_check" />
                </button>
                <button
                  type="button"
                  disabled={isHidePanel}
                  className="buttons btn btn-outline-secondary"
                  onClick={handleOfHidePanel.bind(this, infoCandidate.email)}
                >
                  <FaEyeSlash className="icon_eyeSlash" />
                </button>
              </div>
            </div>
            <div className="col-12 col-md-8 px-5">
              <div className="row mb-4">
                <h2 className="text-start text-dark">Información General</h2>
                <div className="col">
                  <div className="form-outline bg-gray">
                    <label
                      className="form-label text-start text-dark"
                      for="form6Example1"
                    >
                      Nombre
                    </label>
                    <p className="text-dark">{`${infoCandidate.name}`}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-start text-dark"
                      for="form6Example1"
                    >
                      Apellido
                    </label>
                    <p className="text-dark">{infoCandidate.last_name}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-start text-dark"
                      for="form6Example1"
                    >
                      Edad
                    </label>
                    <p className="text-dark">{infoCandidate.age} años</p>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label text-dark" for="form6Example1">
                      Experiencia
                    </label>
                    {/* <p className="text-dark">
                      {infoCandidate.working_experience}
                    </p> */}
                     <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Puesto</th>
                          <th>Decripcion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {infoCandidate.working_experience?.map((item, index) => {
                          return (
                            <tr key={myId()}>
                              <td>{item.position}</td>
                              <td>{item.description}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              {/* <h3 className="text-dark">Lista de skills agregadas</h3> */}
              <div className="col">
                <div className="main">
                  <DataTableExtensions
                    export={false}
                    print={false}
                    {...tableData}
                  >
                    <DataTable
                      {...tableData}
                      key={myId()}
                      columns={columns}
                      data={data}
                      title='Lista de skills agregadas'
                      defaultSortField="#"
                      defaultSortAsc={true}
                      pagination
                      highlightOnHover
                      dense
                    />
                  </DataTableExtensions>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Candidate;
