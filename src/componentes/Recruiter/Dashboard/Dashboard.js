import {React, useState, useEffect} from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import { FaBars} from 'react-icons/fa';
import imgProfile from '../assets/img/profile.png'
import { useParams } from "react-router";
import { endpoints } from "../services/endpoints";
import axios from "axios";
import Header from "./Header";
import { Outlet } from "react-router-dom";


export const Dashboard=()=>{
    // const [profileInformation,setProfileInformation]=useState([])
    // const [isLoading,setLoading]=useState(true)
    // const params=useParams();
    // const {id}=params
    // console.log(id)
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try {
    //             const endpointURL= `${endpoints.getByUser}/${id}`;
    //             const result= await axios.get(endpointURL)
    //             setProfileInformation(result.data)
    //             console.log(result.data[0])
    //         } catch (error) {
    //             console.log(error)
    //         } finally{
    //             setLoading(false)
    //         }         
    //     };
    //     fetchData()
    // },[id]);
    // console.log(profileInformation)
    return(
        <>
          <div className='dashboard'>
            <SidebarRecruiter/>
            <div className='dashboard-app'>
               <Header/>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            <div className='card-header'>
                            </div>
                            <div className='card-body'>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Dashboard