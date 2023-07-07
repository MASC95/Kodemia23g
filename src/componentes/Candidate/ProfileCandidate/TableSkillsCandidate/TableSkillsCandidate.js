import React, { useEffect, useState } from "react";
import GeneralTableSkills from "./GeneralTableSkills";
import SkillsCandidate from "./SkillsCandidate";
import axios from "axios";
import { endpointsGral } from "../../../Recruiter/services/vacancy";
import useJob from "../../../../hooks/useJob.js";
import swal from "sweetalert2";

const TableSkillsCandidate = ({ setDataListSkills }) => {
  //datos de GeneralSkills
  const [dataGeneralSkills, setDataGeneralSkills] = useState([]);
  const [loadingGeneralSkills, setLoadingGeneralSkills] = useState(false);
  const [currentPageGeneralSkills, setCurrentPageGeneralSkills] = useState(1);
  const [totalRowsGeneralSkills, setTotalRowsGeneralSkills] = useState(0);
  const [limitRowsGeneralSkills, setLimitRowsGeneralSkills] = useState(10);
  //fin datos de GeneralSkills

  //datos de SkillsInUser
  const [
    dataCandidate,
    setDataCandidate,
    dataRecrutier,
    setDataRecrutier,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const [dataSkillsInUser, setDataSkillsInUser] = useState([]);
  const [loadingSkillsInUser, setLoadingSkillsInUser] = useState(false);

  const { user_skills } = dataCandidate;

  useEffect(() => {
    //console.log('Nuevos user_skills:..',dataSkillsInUser)
    fetchSkillsInUser();
  }, [dataCandidate]);

  useEffect(() => {
    setDataListSkills([...dataSkillsInUser]);
  }, [dataSkillsInUser]);

  const fetchSkillsInUser = async () => {
    //recuperar los datos(skills) del candidato
    setLoadingSkillsInUser(true);
    if(user_skills) setDataSkillsInUser([...user_skills]);
    //setTotalRowsSkillsInUser(user_skills.length);
    //console.log('Buscando Skilllsss',user_skills)
    setLoadingSkillsInUser(false);
  };

  const fetchGeneralSkills = async (page, limit) => {
    setLoadingGeneralSkills(true);
    const response = await axios.get(
      `${endpointsGral.jobSkill}?page=${page}&limit=${limit}`
    );
    const infoSkill = response.data["item"];
    console.log("infoSkill (newComponent):...", infoSkill);
    console.log("totalDocs:..", infoSkill?.totalDocs);
    setTotalRowsGeneralSkills(infoSkill?.totalDocs);
    setDataGeneralSkills(infoSkill["docs"]);
    setLoadingGeneralSkills(false);
  };
  useEffect(() => {
    fetchGeneralSkills(currentPageGeneralSkills, limitRowsGeneralSkills);
    fetchSkillsInUser();
  }, []);

  useEffect(() => {}, [dataGeneralSkills]);
  const handlePageChangeGeneralSkills = (page) => {
    //console.log('Cambiando de pagina:..',page);
    fetchGeneralSkills(page, limitRowsGeneralSkills);
    setCurrentPageGeneralSkills(page);
  };
  const handlePerRowsChangeGeneralSkills = (limit) => {
    //console.log('Cambiando el limite de datos a renderizar:..',limit)
    fetchGeneralSkills(currentPageGeneralSkills, limit);
    setLimitRowsGeneralSkills(limit);
  };

  const handleAddSkill = (id) => {

    const duplicated = dataSkillsInUser.find((item) => item._id === id);
    if(duplicated){
      swal.fire("La Skill ya esta en tu perfil !!!");
      return
    }

    const selectedSkill = dataGeneralSkills.find((item) => item._id === id);
    //en el front podemos incluir el skill a user_skills de dataCandidate(en el LocalStorage)
    if (selectedSkill) {
      setDataLocalStorage({
        ...dataLocalStorage,
        user_skills: [...user_skills, selectedSkill],
      });
      swal.fire("La Skill fue agregada con exito, recuerda guardar tus cambios !!!");
    }
  };

  const handleDeleteSkill = (id) => {
    console.log("Eliminando Skill(papa):..", id);
    swal
    .fire({
      title: "Mensaje de confirmación",
      text: "¿Estás seguro de que quieres eliminar esta Skill?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0CF574",
      cancelButtonColor: "#FF2F2F",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        const selectedSkill = dataSkillsInUser.find((item) => item._id === id);
        if (selectedSkill) {
          setDataLocalStorage({
            ...dataLocalStorage,
            user_skills: dataSkillsInUser.filter((item)=>item._id!==id),
          });
          swal.fire("La Skill fue eliminada correctamente, recuerda guardar tus cambios !!!");
        }    
      }
    });

    
  };
  return (
    <div>
      <GeneralTableSkills
        generalSkills={dataGeneralSkills}
        handlePageChangeGeneralSkills={handlePageChangeGeneralSkills}
        handlePerRowsChangeGeneralSkills={handlePerRowsChangeGeneralSkills}
        loadingGeneralSkills={loadingGeneralSkills}
        currentPageGeneralSkills={currentPageGeneralSkills}
        totalRowsGeneralSkills={totalRowsGeneralSkills}
        handleAddSkill={handleAddSkill}
      />
      <SkillsCandidate
        dataSkillsInUser={dataSkillsInUser}
        loadingSkillsInUser={loadingSkillsInUser}
        handleDeleteSkill={handleDeleteSkill}
      />
    </div>
  );
};

export default TableSkillsCandidate;
