
import axios from "axios"
import { backURL } from "../../lib/myLib"
 //const loginURL='http://107.23.237.6/api/v1/login'
const loginURL=`${backURL}/api/v1/login`;
const loginAxios=async credentials=>{
    const {data}= await axios.post(loginURL,credentials)
    return data
}
export default {loginAxios}