import React, {useEffect,useState} from 'react'
import GeneralTableSkills from './GeneralTableSkills'
import SkillsCandidate from './SkillsCandidate'
import axios from 'axios'
import {endpointsGral} from '../../../Recruiter/services/vacancy'
import useJob from '../../../../hooks/useJob.js';

const TableSkillsCandidate = () => {
    const [dataGeneralSkills, setDataGeneralSkills]= useState([]);
    const [loadingGeneralSkills,setLoadingGeneralSkills]=useState(false);
    const [currentPageGeneralSkills,setCurrentPageGeneralSkills]=useState(1);
    const [totalRowsGeneralSkills,setTotalRowsGeneralSkills]=useState(0);
    const [limitRows,setLimitRows]=useState(10);
    const [dataCandidate]=useJob();

    const fetchSkillsInUser = async (page,limit)=>{
        const token=dataCandidate.accessToken; 
        const response = await axios.get(`${endpointsGral.getSkillsInUser}${token}?page=${page}&limit=${limit}`);
        const infoSkillInUser = response.data["item"];
        console.log('infoSkillInUser (newComponent InUser):...',response);
    }

    const fetchGeneralSkills = async (page,limit) => {
        setLoadingGeneralSkills(true);
        const response = await axios.get(`${endpointsGral.jobSkill}?page=${page}&limit=${limit}`);
        const infoSkill = response.data["item"];
        console.log('infoSkill (newComponent):...',infoSkill);
        console.log('totalDocs:..',infoSkill?.totalDocs);
        setTotalRowsGeneralSkills(infoSkill?.totalDocs);
        setDataGeneralSkills(infoSkill["docs"]);
        setLoadingGeneralSkills(false);
      };
      useEffect(() => {
        fetchGeneralSkills(currentPageGeneralSkills,limitRows);
        fetchSkillsInUser(1,10);
      }, []);

      useEffect(()=>{

      },[dataGeneralSkills]);
    const handlePageChangeGeneralSkills=(page)=>{
        console.log('Cambiando de pagina:..',page);
        fetchGeneralSkills(page,limitRows);
        setCurrentPageGeneralSkills(page);
    } 
    const handlePerRowsChangeGeneralSkills= (limit)=>{
        console.log('Cambiando el limite de datos a renderizar:..',limit)
        fetchGeneralSkills(currentPageGeneralSkills,limit);
        setLimitRows(limit)
    }
  return (
    <div>
        <GeneralTableSkills 
        generalSkills={dataGeneralSkills} 
        handlePageChangeGeneralSkills={handlePageChangeGeneralSkills}
        handlePerRowsChangeGeneralSkills={handlePerRowsChangeGeneralSkills}
        loadingGeneralSkills={loadingGeneralSkills}
        currentPageGeneralSkills={currentPageGeneralSkills}
        totalRowsGeneralSkills={totalRowsGeneralSkills}
        />
        <SkillsCandidate/>
    </div>
  )
}

export default TableSkillsCandidate