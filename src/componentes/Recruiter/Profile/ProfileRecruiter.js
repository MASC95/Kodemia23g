import {React,useEffect,useState} from "react";
import {FaBars} from 'react-icons/fa'
import imgProfile from '../assets/img/profile.png'
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import FormRecruiter from "./Form/FormRecruiter";
import Header from "../Dashboard/Header";
import { endpoints } from "../services/endpoints";
import axios from "axios";
import { Outlet, useParams } from "react-router-dom";

export const ProfileRecruiter=()=>{
    const [profileInformation,setProfileInformation]=useState([])
    const [isLoading,setLoading]=useState(true)
    const params=useParams();
    const {id}=params
    console.log(id)
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const endpointURL= `${endpoints.getByUser}/${id}`;
                const result= await axios.get(endpointURL)
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
        <div className='card-body'>
           <h1 className="text-start">Información General</h1> 
            <FormRecruiter/>
        </div>
                   
    </>
    )
    
}
export default ProfileRecruiter