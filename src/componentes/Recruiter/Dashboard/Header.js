import React, { useEffect, useState } from "react";
import { FaBars} from 'react-icons/fa';
import imgProfile from '../assets/img/profile.png'
import { endpointsGral } from "../services/vacancy";
import axios from "axios";
import { Link } from "react-router-dom";
import useJob from '../../../hooks/useJob'

const initDataForm = {
    name: "",
    last_name: "",
    avatar_url: "",
  };
export const Header=()=>{
    const perfil = JSON.parse(localStorage.getItem('accessToken'))
    // console.log('token: ', perfil)
    const name=perfil['name']
    const last_name=perfil['last_name']

    return(
        <>
         <header className='dashboard-toolbar'>
                    <div className="row profile-container">
                        <div className="col">
                        <Link className="menu-toggle"><FaBars/>
                            </Link>
                        </div> 
                    <div className="col image-container">
                        <p>{`${name} ${last_name}`}</p>
                        <img src={imgProfile} alt=""/>
                    </div>
                    </div>
                </header>
        </>
    )
}
export default Header