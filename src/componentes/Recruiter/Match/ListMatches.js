<<<<<<< HEAD
import {React,useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import {FaEdit, FaEye} from 'react-icons/fa'
import Modalstatus from "../ModalStatus/Modalstatus";
import './style.scss'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import { myId } from "../../lib/myLib";
//import { red } from "@material-ui/core/colors";
export const ListMatches=()=>{

    const [dataInformation, setDataInformation]=useState([])
    const queryMatch= async()=>{
        try {
            const response= await axios.get(endpointsGral.vacancyURL)
            const datas=response.data['item']
            setDataInformation(datas['docs'])
            console.log(response.data)
        } catch (error) {
            console.log(error) 
        }
    }
    useEffect(()=>{
        queryMatch()
    },[])

    // console.log('dataInformation',dataInformation)
    return(
        <>
           <div className="container mt-2 p-5 w-100 main-t" id="formGral">
        <div className="row softskills">
            <div className="col">
            <table className="table table-1">
                <thead className="thead-table">
                    <tr className="tr-t" style={{backgroundColor: '#498ba6' }}>
                    <th scope="col">#</th>
                    <th scope="col">TITULO</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">CANDIDATOS</th>
                    <th scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {dataInformation?.map((item,index)=>(         
                    <tr className="tr-2" key={myId()}>
                    <th scope="row">{index+1}</th>
                    <td>{item.title}</td>
                    <td>{item.status}</td>
                    <td className="text-center">{item.applicants.length}</td>
                    <td className="options_buttons  d-flex justify-content-center gap-3">
                      <Link to={`/Dashboard-Recruiter/details-match/?m=${item._id}`}>
                        <FaEye/>
                      </Link>
                        <Modalstatus/>
                    </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
=======
// import {React,useEffect,useState} from "react";
// import {Link} from 'react-router-dom'
// import {FaEdit, FaEye} from 'react-icons/fa'
// import Modalstatus from "../ModalStatus/Modalstatus";
// import './style.scss'
// import axios from "axios";
// import { endpointsGral } from "../services/vacancy";
// import { myId } from "../../lib/myLib";
// export const ListMatches=()=>{

//     const [dataInformation, setDataInformation]=useState([])
//     const queryMatch= async()=>{
//         try {
//             const response= await axios.get(endpointsGral.vacancyURL)
//             const datas=response.data['item']
//             setDataInformation(datas['docs'])
//             console.log(response.data)
//         } catch (error) {
//             console.log(error) 
//         }
//     }
//     useEffect(()=>{
//         queryMatch()
//     },[])
//     // console.log('dataInformation',dataInformation)
//     return(
//         <>
//     <div className="container mt-2 p-5 w-100 " id="formGral">
//         <div className="row softskills">
//             <div className="col">
//             <table className="table">
//                 <thead className="thead-dark bg-body-secondary">
//                     <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">TITULO</th>
//                     <th scope="col">STATUS</th>
//                     <th scope="col">CANDIDATOS</th>
//                     <th scope="col">OPCIONES</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {dataInformation?.map((item,index)=>(         
//                     <tr key={myId()}>
//                     <th scope="row">{index+1}</th>
//                     <td>{item.title}</td>
//                     <td>{item.status}</td>
//                     <td className="text-center">{item.applicants.length}</td>
//                     <td className="options_buttons  d-flex justify-content-center gap-3">
//                       <Link to={`/Dashboard-Recruiter/details-match/?m=${item._id}`}>
//                         <FaEye/>
//                       </Link>
//                         <Modalstatus/>
//                     </td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </div>
//         </div>
>>>>>>> devC
      
//         </div>    
//         </>
//     )
// }
// export default ListMatches