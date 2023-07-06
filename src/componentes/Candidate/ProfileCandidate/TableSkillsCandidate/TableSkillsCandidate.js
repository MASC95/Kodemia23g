import React, { useEffect, useState } from "react";
import GeneralTableSkills from "./GeneralTableSkills";
import SkillsCandidate from "./SkillsCandidate";
import axios from "axios";
import { endpointsGral } from "../../../Recruiter/services/vacancy";
import useJob from "../../../../hooks/useJob.js";

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
    setDataSkillsInUser([...user_skills]);
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
    const selectedSkill = dataGeneralSkills.find((item) => item._id === id);
    //en el front podemos incluir el skill a user_skills de dataCandidate(en el LocalStorage)
    if (selectedSkill) {
      setDataLocalStorage({
        ...dataLocalStorage,
        user_skills: [...user_skills, selectedSkill],
      });
    }
  };

  const handleDeleteSkill = (id) => {
    console.log("Eliminando Skill(papa):..", id);
    const selectedSkill = dataSkillsInUser.find((item) => item._id === id);
    if (selectedSkill) {
      setDataLocalStorage({
        ...dataLocalStorage,
        user_skills: dataSkillsInUser.filter((item)=>item._id!==id),
      });
    }
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
