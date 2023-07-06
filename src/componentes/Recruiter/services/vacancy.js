import { backURL } from "../../lib/myLib"

//cambie los endponts para poder acceder a producción y a local
export const endpointsGral = {
    vacancyURL: `${backURL}api/v1/jobVacancy/`,
    usersInVacancy: `${backURL}api/v1/users/getAllUsersInVacancy/`,
    userURL: `${backURL}api/v1/users/`,
    registerUser: `${backURL}api/v1/signup`,
    jobSkill: `${backURL}api/v1/jobSkill/`,
    phaseURL: `${backURL}api/v1/phase/`,
    confirmEmail: `${backURL}api/v1/signup/sendAccessCode`,
    getSkillsInUser:`${backURL}api/v1/users/getSkillsInUser/`,
  };
  

//agregar endpoint
//userURL:'http://107.23.237.6/api/v1/users',