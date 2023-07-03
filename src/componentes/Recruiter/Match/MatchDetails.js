import { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";

import Swal from "sweetalert2";
import useJob from "../../../hooks/useJob";
import "./style.scss";
import MyTable from "./MyTable";



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
  const [dataJobSkills, setDataJobSkills]= useState([]);
  const [nuevoListado, setNuevoListado] = useState(false);

  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchForMatch = async (page,newPerPage) => {
    try {
      const endpointURL = `${endpointsGral.usersInVacancy}${idVacancy}?page=${page}&limit=${newPerPage}`;
      const response = await axios.get(endpointURL);
      console.log('responseBackend:..',response);
      const datasVacancy = response?.data?.item?.docs||[];
      //setDataJobSkills(datasVacancy?.job_skills);
      setDataByUserCandidate(datasVacancy);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchForMatch(1,10);
    listadoApplicants();
  }, []);

  useEffect(() => {
    console.log("nueva lista de candidatos:..",dataByUserCandidate);
    if(dataByUserCandidate?.applicants){
      listadoApplicants();
    }
    
    
  }, [dataByUserCandidate]);

  const listadoApplicants = ()=>{
    
    setNuevoListado(true)
  }
  
  
  //console.log("Job", jobSkilss);

  const handleAddPanel = (id) => {};

  const dadHandleHideofPanel = (index) => {
      console.log('En el papa(index):',index);
     Swal.fire({
      title: "Ocultar candidato",
      text: "Estas seguro de ocultar esta candidato?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ocultar!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('indice a borrar:..',index);
        const hideCandidate = dataByUserCandidate[index];
        const id = hideCandidate._id;
        console.log('candidato a ocultar:..',id);
        if (hideCandidate) {
          const deleteOnList = dataByUserCandidate.filter(
            (_, i) => i !== index
          );
          setDataByUserCandidate(deleteOnList);
          console.log('lista de candidatos sin el oculto:..',deleteOnList);
        } else {
          console.log("error al ocultar");
        }
      }
    }); 
  };
  

  // const data = dataShow;

  

  return (
    <>
      <div className="row m-3">
        <h2 className="text-dark">Lista de aplicantes</h2>
        <div className="col">
          {dataByUserCandidate?.length>0&&
          <MyTable dadHandleHideofPanel={dadHandleHideofPanel} job_skills={dataJobSkills} dataByUserCandidate={dataByUserCandidate}/>
          }
        </div>
      </div>
      <div className="d-flex w-100 justify-content-end p-4">
        <Link to={`/Dashboard-Recruiter/panel-phases?v=${idVacancy}`}>
          <button type="button" className="btn btn-info text-light">
            Panel de Reclutamiento
          </button>
        </Link>
      </div>
    </>
  );
};
export default MatchDetails;
