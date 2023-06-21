import {React,useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import {FaEdit, FaEye} from 'react-icons/fa'
import "./style.scss"
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import { myId } from "../../lib/myLib";
import Swal from 'sweetalert2'
import Example from "./Example";


export const Match=()=>{
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

   const changeStatus=()=>{
    Swal.fire({
        title: 'Cambiar estado: ',
        input: 'select',
        inputOptions: {
          '1': 'Cerrado',
          '2': 'Abierto',
        },
        inputPlaceholder: 'required',
        showCancelButton: true,
        inputValidator: function (value) {
          return new Promise(function (resolve, reject) {
            if (value !== '') {
              resolve();
            } else {
              resolve('You need to select a Tier');
            }
          });
        }
      }).then(function (result) {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            html: 'You selected: ' + result.value
          });
        }
      });
   
   }
    return(
        <>
         <div className='card-body'>
          <h1 className="text-start"><b>Match's</b></h1>
            {/* <ListMatches/> */}
            {/* <div className="container mt-2 p-5 w-100 " id="formGral"> */}
                <div className="row softskills">
                    <div className="col">
                    <table className="table">
                        <thead className="thead-dark bg-body-secondary">
                            <tr>
                            <th scope="col">#</th>
                            <th className=" text-center" scope="col">TITULO</th>
                            <th className=" text-center" scope="col">STATUS</th>
                            <th className=" text-center" scope="col">CANDIDATOS</th>
                            <th scope="col">OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataInformation?.map((item,index)=>{
                                const outDataDuplex=item.applicants?.filter((objeto, indice)=>{
                                    var objetoString = JSON.stringify(objeto);
                                    return (
                                      item.applicants.findIndex((obj, i)=>{
                                        return JSON.stringify(obj) === objetoString;
                                      }) === indice
                                    );
                                  });
                            
                                return(
                                <tr className="text-center" key={myId()}>
                                <th scope="row">{index+1}</th>
                                <td>{item.title}</td>
                                <td>{item.status}</td>
                                <td>{outDataDuplex.length}</td>
                                <td className="options_buttons d-flex text-center" >
                                <Link to={`/Dashboard-Recruiter/details-match/?m=${item._id}`}>
                                <button type="button" className="buttons btn btn-outline-info"><FaEye className="icon_eye1"/></button>
                                </Link>
                                <button type="button" className="buttons btn btn-outline-success" onClick={changeStatus}><FaEdit className="icon_edit1"/></button> 

                                    {/* <Modalstatus/> */}
                                </td>
                                </tr>
                                )  
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
      <Example/>
      
        {/* </div>   */}
         </div>           
        </>
    )
}
export default Match