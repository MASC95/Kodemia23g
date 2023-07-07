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
  const [dataInfoVacancy, setDataInfoVacancy] = useState([]);
  const [nuevoListado, setNuevoListado] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [buttonState, setButtonState] = useState("btn-outline-success");
  const [tempListUser, setListDataUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchForMatch = async (page, newPerPage) => {
    try {
      setLoading(true);
      const endpointURL = `${endpointsGral.usersInVacancy}${idVacancy}?page=${page}&limit=${newPerPage}`;
      const response = await axios.get(endpointURL);
      // console.log('responseBackend:..',response);
      const datasUsers = response?.data?.item?.docs || [];
      setDataByUserCandidate(datasUsers);
      setTotalRows(datasUsers["totalDocs"]);
      setLoading(false);
    } catch (error) {
      console.log(error);
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
      // console.log('datos vacante', dataVacancy)
      setDataInfoVacancy(dataVacancy);
    } catch (error) {}
  };
  useEffect(() => {
    queryVacancy();
  }, []);

  useEffect(() => {
    //console.log('dataSkill(AddSkills):..',dataSkill)
    if (tempListUser.length > 0) {
      console.log("Lista de usuarios para panel:..", tempListUser);
    }
  }, [tempListUser]);

  // pagination
  const handlePageChange = (page) => {
    queryVacancy(page, perPage);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    console.log("Cambiando limit:...", newPerPage);
    queryVacancy(page, newPerPage);
    setPerPage(newPerPage);
  };
  // pagination

  useEffect(() => {
    console.log("nueva lista de candidatos:..", dataByUserCandidate);
    if (dataByUserCandidate) {
      listadoApplicants();
    }
  }, [dataByUserCandidate]);

  const listadoApplicants = () => {
    setNuevoListado(true);
  };

  const dadHandleHideofPanel = (index) => {
    console.log("En el papa(index):", index);
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
        console.log("indice a borrar:..", index);
        const hideCandidate = dataByUserCandidate[index];
        const id = hideCandidate._id;
        console.log("candidato a ocultar:..", id);
        if (hideCandidate) {
          const deleteOnList = dataByUserCandidate.filter(
            (_, i) => i !== index
          );
          setDataByUserCandidate(deleteOnList);
          console.log("lista de candidatos sin el oculto:..", deleteOnList);
        } else {
          console.log("error al ocultar");
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
        const dataRepet = tempDataUser.some(
          (item) => item._id === selectUser._id
        );
        console.log("data repet", dataRepet);
        if (dataRepet) {
          console.log("ya esta agregado");
          Swal.fire(
            "Acción rechazada!",
            "Este usuario ya esta agregado al panel!",
            "error"
          );
        } else {
          const selectUser = dataByUserCandidate[index];
          console.log("agregando usuario a primera fase:..", selectUser._id);
          console.log("dentro de la vacante:..", idVacancy);
          try {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer: ${dataRecruiter.accessToken}`;
            const response = await axios.patch(
              `${endpointsGral.phaseURL}?phase=Llamada&idVacancie=${idVacancy}&idCandidate=${selectUser._id}`
            );
            console.log('responseBackend:..',response);
          } catch (error) {
            console.log(error);
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
        <h2 className="text-dark">Lista de aplicantes</h2>
        <div className="col">
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
            />
          )}
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
