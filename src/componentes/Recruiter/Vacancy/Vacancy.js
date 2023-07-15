import { React, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import { myId } from "../../lib/myLib";
import { endpointsGral } from "../services/vacancy";
import Button2 from "../../Candidate/Buttons/Button2";
import useJob from "../../../hooks/useJob";
import Swal from "sweetalert2";
import ListVacancies from "./ListVacancies";
import { useMediaQuery } from "react-responsive";
export const Vacancy = () => {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const [vacancyAll, setVacancyAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [btnDetele, setBtnDelete] = useState(false);

  const fetch = async (page, newPerPage) => {
    setLoading(true);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer: ${dataRecruiter.accessToken}`;
    const allVacancies = await axios.get(
      `${endpointsGral.vacancyURL}getAllJobVacancyByUser/${dataRecruiter.accessToken}?page=${page}&limit=${newPerPage}`
    );
    const datas = allVacancies.data["item"];
    // console.log("backend Response:..", datas);
    setVacancyAll(datas["docs"]);
    // console.log("PAGINATION", datas["totalDocs"]);
    setTotalRows(datas["totalDocs"]);
    setLoading(false);
  };
  useEffect(() => {
    fetch(1, 10);
  }, []);
  console.log(vacancyAll);
  console.log(totalRows);

  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  useEffect(() => {
    if (vacancyAll.length > 0) {
      console.log("vaListTem", vacancyAll);
      setVacancyAll([...vacancyAll]);
    }
  }, []);

  useEffect(() => {
    console.log("Nuevo valor de limit:..", perPage);
  }, [perPage]);

  // pagination
  const handlePageChange = (page) => {
    fetch(page, perPage);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    console.log("Cambiando limit:...", newPerPage);
    fetch(page, newPerPage);
    setPerPage(newPerPage);
  };
  // pagination

  useEffect(() => {
    // console.log('applicants', vacancyAll)
    // checkApplicants()
    let tempApplicants = false;
    vacancyAll.forEach((item) => {
      const checkArr = item.applicants;
      if (checkArr.length > 0) {
        console.log("si tiene candidatos", checkArr);
        tempApplicants = true;
      }
    });
    setBtnDelete(tempApplicants);
  }, [vacancyAll]);

  console.log("si tiene candidatos outSet", btnDetele);

  const handleDeleteSkill = (index) => {
    Swal.fire({
      title: "Eliminar Vacante?",
      text: "Estas seguro de eliminar esta vacante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(index);
        const deleteVacancy = vacancyAll[index];
        const id = deleteVacancy?._id;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer: ${dataRecruiter.accessToken}`;

        axios
          .delete(`${endpointsGral.vacancyURL}${id}`)
          .then((response) => {
            console.log(response);
            const updateList = vacancyAll.filter((_, i) => i !== index);
            setVacancyAll(updateList);
          })
          .catch((error) => {
            console.log(error.response);
          });
        Swal.fire("Eliminado!", "Vacante eliminada correctamente.", "success");
      }
    });
  };
  // ----------------------------------- table

  return (
    <>
      <div
        className="row container_form_ForVacancy  m-3 p-3"
        style={{ fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <h1
            className="text-start mt-3 "
            style={{
              color: "#498BA6",
              textShadow:
                "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
              fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
            }}
          >
            Vacantes
          </h1>
        </div>
        <div
          className={`tu-clase ${
            isMobile ? "d-flex justify-content-center align-items-center" : ""
          }`}
        >
          <Link
            to={`/Dashboard-Recruiter/vacancy-new`}
            className="text-decoration-none d-sm-block p-3"
          >
            <Button2 text="Crear Vacante" paddingB="10px" fs="14px" />
          </Link>
        </div>
        <div className="content-principal"></div>
        {/* </div> */}
        {/* <div className='card-body'> */}
        <div className="row softskills">
          <div className="col">
            <ListVacancies
              vacancyAll={vacancyAll}
              handleDeleteSkill={handleDeleteSkill}
              handlePageChange={handlePageChange}
              handlePerRowsChange={handlePerRowsChange}
              totalRows={totalRows}
              loading={loading}
              currentPage={currentPage}
              btnDetele={btnDetele}
            />
          </div>
        </div>
        {/* <ListVacancy postdata={vacancyAll}/>
              <Outlet/> */}
      </div>
    </>
  );
};
export default Vacancy;
