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
export const Candidate = () => {
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const idCandidate = urlParams.get("c");
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
  const queryByUsers = async () => {
    try {
      const response = await axios.get(`${endpointsGral.userURL}getUser/${idCandidate}`);
      console.log('response:...',response);
      const dataUser = response?.data;
      const objUser = dataUser?.user;
      /* console.log('objUsers:...',objUsers);
      console.log('idCandidate:..',idCandidate);
      const userFind = objUsers.find((value) => value._id === idCandidate); */
      if(objUser) setInfoCandidate(objUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    queryByUsers();
    
  }, []);

  const fetchSkill =  () => {
    if(infoCandidate?.user_skills){
      setDataSkill([...infoCandidate?.user_skills]);
    }
  };

  // const handleOfPanel=(id)=>{
   
  // Swal.fire({
  //   title: "Panel de reclutamiento",
  //   text: "Estas seguro de agregar al candidato?!",
  //   icon: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "Si, agregar!",
  // }).then(async (result) => {
  //   if (result.isConfirmed) {
  //     const selectUser = dataByUserCandidate[index];

  //     let tempDataUser = [...tempListUser];
  //     const dataRepet = tempDataUser.some(
  //       (item) => item._id === selectUser._id
  //     );
  //     console.log("data repet", dataRepet);
  //     if (dataRepet) {
  //       console.log("ya esta agregado");
  //       Swal.fire(
  //         "Acción rechazada!",
  //         "Este usuario ya esta agregado al panel!",
  //         "error"
  //       );
  //     } else {
  //       const selectUser = dataByUserCandidate[index];
  //       console.log("agregando usuario a primera fase:..", selectUser._id);
  //       console.log("dentro de la vacante:..", idVacancy);
  //       try {
  //         axios.defaults.headers.common[
  //           "Authorization"
  //         ] = `Bearer: ${dataRecruiter.accessToken}`;
  //         const response = await axios.patch(
  //           `${endpointsGral.phaseURL}?phase=Llamada&idVacancie=${idVacancy}&idCandidate=${selectUser._id}`
  //         );
  //         console.log("responseBackend (candidato Agregado):..", response);
  //         if (response) {
  //           queryPhase();
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //       tempDataUser.push(selectUser);
  //       setListDataUser([...tempDataUser]);
  //     }
  //     // console.log('lista de usuarios para reclutamiento',tempDataUser)
  //     setButtonDisabled(true);
  //     // setButtonState("btn-outline-secondary")
  //   }
  // });
  // }

  // const handleOfHidePanel=(id)=>{
  //   console.log("En el papa(index):", index);
  //   Swal.fire({
  //     title: "Ocultar candidato",
  //     text: "Estas seguro de ocultar esta candidato?!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Si, ocultar!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       console.log("indice a borrar:..", index);
  //       const hideCandidate = dataByUserCandidate[index];
  //       const id = hideCandidate._id;
  //       console.log("candidato a ocultar:..", id);
  //       if (hideCandidate) {
  //         const deleteOnList = dataByUserCandidate.filter(
  //           (_, i) => i !== index
  //         );
  //         try {
  //           axios.defaults.headers.common[
  //             "Authorization"
  //           ] = `Bearer: ${dataRecruiter.accessToken}`;
  //           console.log(
  //             "dataRecruiter.accessToken ",
  //             dataRecruiter.accessToken
  //           );
  //           const responseBack = await axios.post(
  //             `${endpointsGral.hideUserInVacancy}`,
  //             { idVacancy, idCandidate: id, emailUser: hideCandidate.email }
  //           );
  //           console.log("responseBack HideUser:..", responseBack);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //         setDataByUserCandidate(deleteOnList);
  //         console.log("lista de candidatos sin el oculto:..", deleteOnList);
  //       } else {
  //         console.log("error al ocultar");
  //       }
  //     }
  //   });
  // }

  useEffect(() => {
    console.log('infoCandidate:...',infoCandidate);
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
                  // onClick={handleOfPanel.bind(this,infoCandidate._id)}
                 >
                  <FaCheck className="icon_check"/>
                </button>
                <button
                  type="button"
                  className="buttons btn btn-outline-secondary"
                  //  onClick={handleOfHidePanel.bind(this,infoCandidate._id)}
                >
                  <FaEyeSlash className="icon_eyeSlash"/>
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
                    <p className="text-dark">
                      {infoCandidate.working_experience}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-dark">Lista de skills agregadas</h3>
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
                      noHeader
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
