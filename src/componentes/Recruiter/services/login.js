import axios from "axios"
const loginURL='https://apibackendjob-production.up.railway.app/api/login'

const loginAxios=async credentials=>{
    const {data}= await axios.post(loginURL,credentials)
    return data
}
export default {loginAxios}