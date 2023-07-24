import React,{useState,useEffect} from "react";
import { FaBars } from "react-icons/fa";

import imgProfile from "../../Recruiter/assets/img/perfil2.jpg";
import ListMyAppVacancy from "./ListMyAppVacancy";
//import ResponsiveTable from "./ResponsiveTable";
import VerticalListVacancy from "./VerticalListVacancy";
import Example from "./Example";
import { FcRefresh } from "react-icons/fc";

//muestra mis vacantes
export const AppVacancyCandidate = () => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(()=>{
    //console.log("refrescando datos:..");
  },[refreshing])
  const handleRefresh = () => {
    //console.log("refrescando datos:..");
    setRefreshing(prev=>!prev);
  };
  return (
    <>
      <div className="card-body">
        <h1
          className="text-center  my-5 mb-0"
          style={{
            color: "#498ba6",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          Vacantes aplicadas
        </h1>
        <div className="d-flex justify-content-end">
          <span
            style={{ width: "fit-content", cursor: "pointer", color: "blue" }}
            onClick={handleRefresh}
            className=" btn btn-outline-info d-flex justify-content-center align-items-center"
          >
            <FcRefresh style={{ color: "blue" }} />
          </span>
        </div>

        <ListMyAppVacancy
        refreshing={String(refreshing)}
        /*  handlePageChange={handlePageChange}
          handlePerRowsChange={handlePerRowsChange}
          totalRows={totalRows}
          loading={loading}
          currentPage={currentPage} */
        />

        {/* <VerticalListVacancy/> */}
      </div>
    </>
  );
};
export default AppVacancyCandidate;

/* <VerticalTable vacancies={vacancies} my_vacancies={my_vacancies} handleApply={handleApply} handleStopApplying={handleStopApplying}/>
      <HorizonTable vacancies={vacancies} my_vacancies={my_vacancies} handleApply={handleApply} handleStopApplying={handleStopApplying}/>
      {showAlert && <AlertComponent />} */
