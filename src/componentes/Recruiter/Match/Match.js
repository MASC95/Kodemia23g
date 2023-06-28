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
          <h1 className="text-center text-dark"><b>Match's</b></h1>
      <Example/>
      
        {/* </div>   */}
         </div>           
        </>
    )
}
export default Match