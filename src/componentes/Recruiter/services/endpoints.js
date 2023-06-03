
import axios from "axios"

const endpointsAPI={
    vacancyURL:'https://apibackendjob-production.up.railway.app/api/v1/jobVacancy',
    userURL:'https://apibackendjob-production.up.railway.app/api/v1/users',
}

const loginURL='https://apibackendjob-production.up.railway.app/api/v1/login'
const vacancyURL='https://apibackendjob-production.up.railway.app/api/v1/jobVacancy'

const loginAxios=async credentials=>{
    const {data}= await axios.post(loginURL,credentials)
    return data
}
export default {loginAxios, endpointsAPI}