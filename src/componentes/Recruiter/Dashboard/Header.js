import React, { useEffect, useState } from "react";
import { FaBars} from 'react-icons/fa';
import imgProfile from '../assets/img/profile.png'
import { endpointsGral } from "../services/vacancy";
import axios from "axios";
import { Link } from "react-router-dom";
import useJob from '../../../hooks/useJob'

export const Header=()=>{
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]= useJob();
    return(
        <>
         <header className='dashboard-toolbar'>
                    <div className="row profile-container">
                        <div className="col">
                        <Link className="menu-toggle"><FaBars/>
                            </Link>
                        </div> 
                    <div className="col image-container">
                        <p>{`${dataRecruiter.name} ${dataRecruiter.last_name}`}</p>
                        <img src={dataRecruiter.avatar_url} alt=""/>
                    </div>
                    </div>
                </header>
        </>
    )
}
export default Header