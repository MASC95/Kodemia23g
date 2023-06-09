
import axios from "axios"
 //const loginURL='http://107.23.237.6/api/v1/login'
const loginURL='http://localhost:4000/api/v1/login'
const loginAxios=async credentials=>{
    const {data}= await axios.post(loginURL,credentials)
    return data
}
export default {loginAxios}