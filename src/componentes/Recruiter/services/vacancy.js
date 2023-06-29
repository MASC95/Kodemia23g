import { backURL } from "../../lib/myLib"

//cambie los endponts para poder acceder a producción y a local
export const endpointsGral = {
    vacancyURL: `${backURL}api/v1/jobVacancy/`,
    userURL: `${backURL}api/v1/users/`,
    registerUser: `${backURL}api/v1/signup`,
    jobSkill: `${backURL}api/v1/jobSkill/`,
    phaseURL: `${backURL}api/v1/phase/`,
    confirmEmail: `${backURL}api/v1/signup/sendAccessCode`
  };
  

//agregar endpoint
//userURL:'http://107.23.237.6/api/v1/users',