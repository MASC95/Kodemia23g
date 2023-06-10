import {React, useEffect} from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useJob from "../../../hooks/useJob";


export const Dashboard=()=>{
    
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, initDataCandidate, initDataRecrutier]= useJob();

    useEffect(()=>{
        console.log('dashborad data',dataRecruiter)
    },[dataRecruiter])

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