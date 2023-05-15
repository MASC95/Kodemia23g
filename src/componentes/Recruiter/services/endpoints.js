// export const endpoints = {
//     // getByUser:'http://107.23.237.6/api/v1/users',
//     // loginRecruiter:'http://107.23.237.6/api/v1/login',
//     // postVacancy:'http://107.23.237.6/api/v1/jobVacancy'
//     getByUser:'http://localhost:3000/api/v1/users',
//     loginRecruiter:'http://localhost:3000/api/v1/login',
//     postVacancy:'http://localhost:3000/api/v1/jobVacancy/'
// }
import axios from "axios"
const endpointsGral={
    vacancyURL:'https://apibackendjob-production.up.railway.app/api/v1/jobVacancy',
}

const loginURL='https://apibackendjob-production.up.railway.app/api/v1/login'
const vacancyURL='https://apibackendjob-production.up.railway.app/api/v1/jobVacancy'

const loginAxios=async credentials=>{
    const {data}= await axios.post(loginURL,credentials)
    return data
}
export default {loginAxios, endpointsGral}