import {React, useEffect} from "react";
// import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import NavbarRecruiter from "../SidebarRecruiter/NavbarRecruiter";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useJob from "../../../hooks/useJob";


export const Dashboard=()=>{
    
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]= useJob();
    useEffect(()=>{
        // console.log('dashborad data',dataRecruiter)
    },[dataRecruiter])

    return(
        <>
            <NavbarRecruiter/>
            <Outlet/>
        </>
    )
}
export default Dashboard