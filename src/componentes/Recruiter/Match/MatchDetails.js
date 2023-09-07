import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import Swal from "sweetalert2";
import useJob from "../../../hooks/useJob";
import "./style.scss";
import MyTable from "./MyTable";
import { idPhaseOne } from "../../lib/myLib";
import {FcRefresh} from "react-icons/fc";
import { Spinner } from "react-bootstrap";


export const MatchDetails = () => {
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const idVacancy = urlParams.get("m");

  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const [dataByUserCandidate, setDataByUserCandidate] = useState([]);
  const [dataInfoVacancy, setDataInfoVacancy] = useState([]);
  const [nuevoListado, setNuevoListado] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [buttonState, setButtonState] = useState("btn-outline-success");
  const [tempListUser, setListDataUser] = useState([]);
  const [listApplicantsPhaseOne, setListApplicantsPhaseOne] = useState([]);
  const [errorBackend, setErrorBackend] = useState('');

  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchForMatch = async (page, newPerPage) => {
    try {
      setLoading(true);
      const endpointURL = `${endpointsGral.usersInVacancy}${idVacancy}?page=${page}&limit=${newPerPage}`;
      const response = await axios.get(endpointURL);
       //console.log('responseBackend(match-details):..',response);
      const datasUsers = response?.data?.item?.docs || [];
      setDataByUserCandidate(datasUsers);
      setTotalRows(datasUsers["totalDocs"]);
      setLoading(false);
    } catch (error) {
      //console.log(error);
    }
  };
  useEffect(() => {
    fetchForMatch(1, 10);
    listadoApplicants();
  }, []);

  const queryVacancy = async () => {
    try {
      const endpointVacancy = `${endpointsGral.vacancyURL}${idVacancy}`;
      const response = await axios.get(endpointVacancy);
      const dataVacancy = response?.data?.infoVacancy;
      //console.log("datos vacante", dataVacancy);
      setDataInfoVacancy(dataVacancy);
    } catch (error) {}
  };
  useEffect(() => {
    queryVacancy();
    queryPhase();
  }, []);

  useEffect(() => {
    //console.log("lista de aplicantes Fase1:..", listApplicantsPhaseOne);
  }, [listApplicantsPhaseOne]);

  // Phase

  const queryPhase = async () => {
    const phases = ["Llamada", "Entrevista", "Pruebas", "Contratado"];
    let tempData = [];
    for (const phase of phases) {
      const endpointPhase = `${endpointsGral.phaseUrlGetPhase}?phase=${phase}`;
      try {
        const response = await axios.get(endpointPhase);

        const result = response?.data?.infoPhase?.vacancies;
        //console.log(`Phase ${phase}, backend:..`, result);
        const dataInformationVacancy = result.find(
          (item) => String(item.idVacancie) === idVacancy
        );

        if (dataInformationVacancy) {
          //console.log(`dataInformationVacancy:..${phase}`, dataInformationVacancy);
          tempData = [...tempData, ...dataInformationVacancy?.applicants];
        } else {
          tempData = [...tempData];
        }
      } catch (error) {
        console.log("Error al recuperar los datos de las fases:..", error);
      }
    }
    //console.log("todos los applicantes en las 4 fases:..", tempData);
    setListApplicantsPhaseOne([...tempData]);
  };

  useEffect(() => {
    ////console.log('dataSkill(AddSkills):..',dataSkill)
    if (tempListUser.length > 0) {
      //console.log("Lista de usuarios para panel:..", tempListUser);
    }
  }, [tempListUser]);

  // pagination
  const handlePageChange = (page) => {
    queryVacancy(page, perPage);
    setCurrentPage(page);
  };
  const handleRefresh = ()=>{
    console.log('refrescando datos:..');
    queryVacancy();
    queryPhase();
    fetchForMatch(1, 10);
    listadoApplicants();
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    //console.log("Cambiando limit:...", newPerPage);
    queryVacancy(page, newPerPage);
    setPerPage(newPerPage);
  };
  // pagination

  useEffect(() => {
    //console.log("nueva lista de candidatos:..", dataByUserCandidate);
    if (dataByUserCandidate) {
      listadoApplicants();
    }
  }, [dataByUserCandidate]);
  useEffect(()=>{
    if(errorBackend!==''){
      Swal.fire('Lo sentimos!',errorBackend,'error')
    }
  },[errorBackend])

  const listadoApplicants = () => {
    setNuevoListado(true);
  };

  const dadHandleHideofPanel = (index) => {
    //console.log("En el papa(index):", index);
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
        //console.log("indice a borrar:..", index);
        const hideCandidate = dataByUserCandidate[index];
        const id = hideCandidate._id;
        //console.log("candidato a ocultar:..", id);
        if (hideCandidate) {
          const deleteOnList = dataByUserCandidate.filter(
            (_, i) => i !== index
          );
          try {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer: ${dataRecruiter.accessToken}`;
            //console.log(
            //   "dataRecruiter.accessToken ",
            //   dataRecruiter.accessToken
            // );
            const responseBack = await axios.post(
              `${endpointsGral.hideUserInVacancy}`,
              { idVacancy, idCandidate: id, emailUser: hideCandidate.email }
            );
            //console.log("responseBack HideUser:..", responseBack);
          } catch (error) {
            console.log('Error al ocultar user:..',error);
            const errMs= error?.response?.data?.errors[0]?.message;
            if(errMs){
              setErrorBackend(errMs)
            }
          }
          setDataByUserCandidate(deleteOnList);
          //console.log("lista de candidatos sin el oculto:..", deleteOnList);
        } else {
          //console.log("error al ocultar");
        }
      }
    });
  };
  const dadHandleofPanel = (index) => {
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
        const selectUser = dataByUserCandidate[index];

        let tempDataUser = [...tempListUser];
        /*const dataRepet = tempDataUser.some(
          (item) => item._id === selectUser._id
        );*/
        const dataRepet = listApplicantsPhaseOne.find(el=>String(el)===String(selectUser._id));
        //console.log("data repet", dataRepet);
        if (dataRepet) {
          //console.log("ya esta agregado");
          Swal.fire(
            "Acción rechazada!",
            "Este usuario ya esta agregado al panel!",
            "error"
          );
        } else {
          const selectUser = dataByUserCandidate[index];
          //console.log("agregando usuario a primera fase:..", selectUser._id);
          //console.log("dentro de la vacante:..", idVacancy);
          try {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer: ${dataRecruiter.accessToken}`;
            const response = await axios.patch(
              `${endpointsGral.phaseURL}?phase=Llamada&idVacancie=${idVacancy}&idCandidate=${selectUser._id}`
            );
            //console.log("responseBackend (candidato Agregado):..", response);
            if (response) {
              queryPhase();
            }
          } catch (error) {
            console.log("Error al agregar candidato:..", error);
            const errMs= error?.response?.data?.errors[0]?.message;
            if(errMs){
              setErrorBackend(errMs)
            }
          }
          tempDataUser.push(selectUser);
          setListDataUser([...tempDataUser]);
        }
        // console.log('lista de usuarios para reclutamiento',tempDataUser)
        setButtonDisabled(true);
        // setButtonState("btn-outline-secondary")
      }
    });
  };
  return (
    <>
      <div className="row m-3">
        <h2 className="fs-1 text-center  fs-4">
          Empresa: {dataInfoVacancy?.companyName}
        </h2>
        <h2 className="fs-1 text-center  fs-4">
          Título de la vacante: {dataInfoVacancy.title}
        </h2>
        <div className="d-flex justify-content-end">
        <span 
        style={{width:'fit-content',cursor:'pointer', color:'blue'}} 
        onClick={handleRefresh}
        className=" btn btn-outline-info d-flex justify-content-center align-items-center">
          <FcRefresh style={{color:'blue'}}/>
          </span>
          </div>
        {/* <h2 className="text-dark">Lista de aplicantes</h2> */}
        <div className="col">
          {loading && <div className="d-flex justify-content-center"><Spinner/></div>}
          {dataByUserCandidate?.length===0&&<div className="d-flex justify-content-center text-danger">Esta vacante aun no tiene aplicantes</div>}
          {dataByUserCandidate?.length > 0 && (
            <MyTable
              dadHandleHideofPanel={dadHandleHideofPanel}
              dadHandleofPanel={dadHandleofPanel}
              dataInfoVacancy={dataInfoVacancy}
              dataByUserCandidate={dataByUserCandidate}
              handlePageChange={handlePageChange}
              handlePerRowsChange={handlePerRowsChange}
              totalRows={totalRows}
              loading={loading}
              currentPage={currentPage}
              isButtonDisabled={isButtonDisabled}
              buttonState={buttonState}
              listApplicantsPhaseOne={listApplicantsPhaseOne}
              idVacancy={idVacancy}
            />
          )}
        </div>
      </div>
      <div className="d-flex w-100 justify-content-end p-4">
        <Link to={dataByUserCandidate?.length===0?'#':`/Dashboard-Recruiter/panel-phases?v=${idVacancy}&title=${dataInfoVacancy.title}&company=${dataInfoVacancy.companyName}`}>
          <button type="button" className="btn btn-info text-light">
            Panel de Reclutamiento
          </button>
        </Link>
      </div>
    </>
  );
};
export default MatchDetails;
