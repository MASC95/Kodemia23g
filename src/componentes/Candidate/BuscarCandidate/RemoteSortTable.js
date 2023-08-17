import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { myId } from "../../lib/myLib";
import useJob from "../../../hooks/useJob";
import axios from "axios";
import { endpointsGral } from "../../Recruiter/services/vacancy";
import DataTable from "react-data-table-component";
import SelectAutoComplete from "./SelectAutoComplete";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { FcRefresh } from "react-icons/fc";
import VacanciesDataTable from "./VacanciesDataTable";

const RemoteSortTable = () => {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const { my_vacancies } = dataCandidate;
  const [loading, setLoading] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorBackend, setErrorBackend] = useState("");
  const [data, setData] = useState([]);
  const [dataTitles, setDataTitles] = useState([]);
  const [resetConsult, setResetConsult] = useState(false);
  
  const [dataConsult, setDataConsult] = useState('')

  const fetchData = async (page, newPerPage) => {
    setLoading(true);
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate?.accessToken}`;
      const response = await axios.get(
        `${endpointsGral.vacancyURL}?page=${page}&limit=${newPerPage}`
      );
      const datas = response?.data["item"];
      if(datas){
        setVacancies(datas["docs"]);
        setTotalRows(datas["totalDocs"]);
        setCurrentPage(page);
        setPerPage(newPerPage);
      }
      
      setLoading(false);
      //console.log(`response fetchData page(${page}) newPerPage(${newPerPage}):..`,response.data);
      //console.log("Response Data All vacancies.... ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTitlesVacancies = async () => {
    try {
      const response = await axios.get(
        `${endpointsGral.vacancyURL}getTitlesVacancies`
      );
      //console.log("response getTitlesVacancies:...", response);
      if (response?.data) {
        let tempData = [
          ...response?.data?.distinctTitles,
          ...response?.data?.distinctCompanies,
          ...response?.data?.distinctCities,
          ...response?.data?.distinctModes,
          ...response?.data?.distinctTypes,
        ];
        if (tempData) {
          setDataTitles([...tempData]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(1, 10);
    getTitlesVacancies();
  }, []);

  useEffect(() => {
    if (errorBackend !== "") {
      Swal.fire("Lo Sentimos!", errorBackend, "error");
    }
  }, [errorBackend]);

  const handleApply = (e) => {
    Swal.fire({
      title: "Aplicar a Vacante",
      text: "Estas seguro de aplicar a esta vacante!!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Aplicar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const idVacancie = e.target.id;
        console.log("Manejando la funcion Aplicar:...", idVacancie);
        let dataVacancies = [];
        let dataApplicants = [];
        try {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer: ${dataCandidate?.accessToken}`;

          if (dataCandidate?.my_vacancies) {
            const tempArrayIdsVacancies=dataCandidate?.my_vacancies?.map(item=>item._id);
            dataVacancies = [...tempArrayIdsVacancies, idVacancie];
          } else {
            dataVacancies.push(idVacancie);
          }
          
          //se actualiza el array de my_vacancies en la entidad user
          const responseUpdateDataUser = await axios.patch(
            `${endpointsGral.userURL}${dataCandidate.accessToken}`,
            { my_vacancies: dataVacancies }
          );
          //se actualiza el array de applicants en la entidad vacancie
          const responseUpdateDataVacancie = await axios.patch(
            `${endpointsGral.vacancyURL}${idVacancie}`,
            { token: dataCandidate.accessToken }
          );

          if (responseUpdateDataUser && responseUpdateDataVacancie) {
            const getDataCandidate = await axios.get(
              `${endpointsGral.userURL}${dataCandidate.accessToken}`
            );
            if (getDataCandidate?.data?.user)
              //se actualiza el contexto
              setDataLocalStorage({
                ...getDataCandidate?.data?.user,
                accessToken: dataCandidate.accessToken,
              });
          }
          //console.log("Response updateDataUser:..", responseUpdateDataUser);
          //console.log("Response updateDataVacancie:..", responseUpdateDataVacancie);
        } catch (error) {
          console.log("Error al aplicar:...", error);
          const errMsg = error?.response?.data?.errors[0]?.message;
          if (errMsg) {
            setErrorBackend(errMsg);
          }
        }
      }
    });
  };

  const handleStopApplying = (e) => {
    Swal.fire({
      title: "Dejar de Aplicar a Vacante",
      text: "Estas seguro de Dejar de aplicar a esta vacante!!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Dejar de Aplicar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const idVacancie = e.target.id;
        console.log("Manejando la funcion de Dejar de Aplicar:...", idVacancie);
        let dataVacancies = [];
        try {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer: ${dataCandidate?.accessToken}`;

          if (my_vacancies) {
            
            my_vacancies.forEach(element => {
              if(element._id!==idVacancie){
                dataVacancies.push(element._id)
              }
            });
          }

          //se actualiza el array de my_vacancies en la entidad user
          const responseUpdateDataUser = await axios.patch(
            `${endpointsGral.userURL}${dataCandidate.accessToken}`,
            { my_vacancies: dataVacancies }
          );
          //se actualiza el array de applicants en la entidad vacancie
          const responseUpdateDataVacancie = await axios.patch(
            `${endpointsGral.vacancyURL}${idVacancie}`,
            { token: dataCandidate.accessToken, deleteApplicant: true }
          );

          if (responseUpdateDataUser && responseUpdateDataVacancie) {
            const getDataCandidate = await axios.get(
              `${endpointsGral.userURL}${dataCandidate.accessToken}`
            );
            if (getDataCandidate?.data?.user)
              //se actualiza el contexto
              setDataLocalStorage({
                ...getDataCandidate?.data?.user,
                accessToken: dataCandidate.accessToken,
              });
          }
        } catch (error) {
          console.log("Error al dejar de aplicar:...", error);
          const errMsg = error?.response?.data?.errors[0]?.message;
          if (errMsg) {
            setErrorBackend(errMsg);
          }
        }
      }
    });
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row._id,
      sortable: true,
      omit: true,
    },
    {
      name: "EMPRESA ",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "TÍTULO DE LA VACANTE",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "TIPO DE TRABAJO",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "CIUDAD",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "MODALIDAD",
      selector: (row) => row.mode,
      sortable: true,
    },
    {
      name: "SALARIO MENSUAL",
      selector: (row) => row.salary,
      sortable: true,
    },
    {
      name: "OPCIÓN",
      sortable: false,
      selector: (row) => row.null,
      center: true,
      cell: (d) => (
        <div
          className="options-buttons mt-3 mb-3 bg-light  d-flex flex-column gap-1"
          key={myId()}
          style={{
            width: "350px",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          {my_vacancies?.find((myVac) => myVac._id === d._id) === undefined ? (
            <button
              type="submit"
              id={d._id}
              key={myId()}
              className="btn btn-outline-success buscar w-100"
              onClick={handleApply}
              disabled={
                my_vacancies?.find((myVac) => myVac._id === d._id) === undefined
                  ? false
                  : true
              }
            >
              {my_vacancies?.find((myVac) => myVac._id === d._id) === undefined
                ? "Aplicar"
                : "Aplicando"}
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-danger w-100"
              id={d._id}
              key={myId()}
              onClick={handleStopApplying}
            >
              No Aplicar
            </button>
          )}
          <Link to={`/dashboard-candidato/detail-vacancy/${d._id}`}>
            <button
              type="submit"
              className="btn btn-outline-info w-100"
              key={myId()}
            >
              Abrir
            </button>
          </Link>
        </div>
      ),
    },
  ];
  useEffect(() => {
    if (vacancies.length > 0) {
      const tempData = vacancies?.map((item, index) => {
        const str = item.salary.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return {
          ...item,
          id: myId(),
          _id: item._id,
          index: index + 1,
          company: item.companyName,
          title: item.title,
          type: item.type,
          city: item.city,
          mode: item.mode,
          salary: `$ ${str}.00`,
        };
      });
      setData([...tempData]);
    }
  }, [vacancies]);

  useEffect(() => {
    //console.log('datos de la tabla:...',data);
  }, [data]);

  const tableData = {
    columns,
    data,
  };
  useEffect(()=>{
    //console.log('nuevo valor de currentPage(dad):..',currentPage)
  },[currentPage])
  useEffect(()=>{

  },[totalRows])
  useEffect(()=>{
    //console.log('nuevo valor de limit(perPage)(dad):..',perPage)
  },[perPage])
  useEffect(()=>{

  },[dataConsult])
  useEffect(()=>{

  },[resetConsult])
  const handleConsult = async (value,dataPage,dataPerPage) => {
    //console.log("Buscaremos en el Back:..", value);
    setLoading(true);
    const pageConsult= dataPage?dataPage:currentPage;
    const limitConsult= dataPerPage?dataPerPage:perPage;
    try {
      const response = await axios.get(
        `${endpointsGral.vacancyURL}getDataConsult?value=${value}&page=${pageConsult}&limit=${limitConsult}`
      );
      //console.log(`response getDataConsult currentPage(${pageConsult}) limit(${limitConsult}):..`, response);
      
      if (response?.data) {
        const tempData = response?.data?.item?.docs?.map((item, index) => {
          const str = item.salary.toString().split(".");
          str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return {
            ...item,
            id: myId(),
            _id: item._id,
            index: index + 1,
            company: item.companyName,
            title: item.title,
            type: item.type,
            city: item.city,
            mode: item.mode,
            salary: `$ ${str}.00`,
          };
        });

        setData([...tempData]);
        setTotalRows(response?.data?.item?.totalDocs);
        //data.item.page
        setCurrentPage(response?.data?.item?.page);
        setPerPage(response?.data?.item?.limit);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    //console.log("Cambiando limit:...", newPerPage);
    if(dataConsult===''){
      fetchData(page, newPerPage);
    }else{
      handleConsult(dataConsult,null,newPerPage);
    }
    
    setPerPage(newPerPage);
  }; // pagination

  const handlePageChange = (page) => {
    //console.log("handlePageChange Page:..", page);
    if(dataConsult===''){
      fetchData(page, perPage);
    }else{
      handleConsult(dataConsult,page);
    }
    
    setCurrentPage(page);
  };
  const handleRefresh = () => {
    //console.log("Manejando Refreshing:...");
    setCurrentPage(1);
    setPerPage(10);
    fetchData(1, 10);
    setResetConsult(true);
    setDataConsult('');
  };

  return (
    <div>
      <div className="container d-flex justify-content-end">
        <span
          style={{ width: "fit-content", cursor: "pointer", color: "blue" }}
          onClick={handleRefresh}
          className=" text-center  btn btn-outline-info"
        >
          <FcRefresh style={{ color: "blue" }} />
        </span>
      </div>
      <SelectAutoComplete
        dataSelect={dataTitles}
        handleConsult={handleConsult}
        resetConsult={resetConsult}
        setResetConsult={setResetConsult}
        setCurrentPage={setCurrentPage}
        setPerPage={setPerPage}
        setDataConsult={setDataConsult}
      />
      <span className="d-flex justify-content-center my-2">
        {loading && <Spinner />}
      </span>
      
      <VacanciesDataTable
        columns={columns}
        data={data}
        loading={loading}
        perPage={perPage}
        totalRows={totalRows}
        currentPage={currentPage}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default RemoteSortTable;
