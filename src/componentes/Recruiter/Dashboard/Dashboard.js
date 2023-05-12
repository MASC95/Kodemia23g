import {React, useState, useEffect} from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import Header from "./Header";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../services/endpoints";

export const Dashboard=()=>{
    const [profileInformation,setProfileInformation]=useState([])
    const [isLoading,setLoading]=useState(true)
    const params=useParams();
    const {id}=params
    console.log(id)
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const endpointURL= `${endpoints.getByUser}/${id}`;
                const result= await axios.get(endpointURL,
                            {headers:{}})
                setProfileInformation(result.data)
                console.log(result.data[0])
            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false)
            }         
        };
        fetchData()
    },[id]);
    console.log(profileInformation)
    return(
        <>
          <div className='dashboard'>
            <SidebarRecruiter/>
            <div className='dashboard-app'>
               <Header postdata={profileInformation}/>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            <div className='card-header'>
                                <h1>BIENVENIDO A JOBINDER</h1>
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