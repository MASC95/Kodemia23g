import { backURL } from "../../lib/myLib";
//cambie los endponts para poder acceder a producción y a local
export const endpoints = {
    profileAddSkills: `${backURL}/api/v1/profile/add-skills`,
    profileAddSkillsById: `${backURL}/api/v1/profile/add-skills/:id`,
    candidateMyVacancies: `${backURL}/api/v1/candidate/my-vacancies`,
    candidateMyVacanciesSearch: `${backURL}api/v1/candidate/my-vacancies/search`,
    candidateApplyToVacancy: `${backURL}/api/v1/candidate/my-vacancies/:id_vacancy/apply`,
    candidateVacancyById: `${backURL}api/v1/jobVacancy/`,
    
    candidateUploadProfilePic: `${backURL}/api/v1/profile/upload-photo`
};

//http://107.23.237.6/api/v1/jobVacancy/646040988844566b57352249

//trabajando my vacancies /api/v1/skillMatch