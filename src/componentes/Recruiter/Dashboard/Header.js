import React, { useEffect, useState } from "react";
import { FaBars} from 'react-icons/fa';
import imgProfile from '../assets/img/profile.png'
import { endpointsGral } from "../services/vacancy";
import axios from "axios";
import { Link } from "react-router-dom";

export const Header=()=>{

    const perfil = JSON.parse(localStorage.getItem('accessToken'))
    const token=perfil['access_token']
    console.log('token: '+ token)
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    const destroy=parseJwt(token)
    console.log(destroy['_id'])
    const id= destroy['_id']
    const [getInformation, setGetInformation]=useState({})
    useEffect(()=>{
        const fetch =async()=>{
            try {
                const endpointURL= `${endpointsGral.userURL}/${id}`;
                const queryUser= await axios.get(endpointURL);
                setGetInformation(queryUser.data)
                console.log(queryUser)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    },[id])
    console.log(getInformation)

    return(
        <>
         <header className='dashboard-toolbar'>
                    <div className="row profile-container">
                        <div className="col">
                        <Link className="menu-toggle"><FaBars/>
                            </Link>
                        </div> 
                    <div className="col image-container">
                        <p>{getInformation.name+' '+ getInformation.last_name}</p>
                        <img src={imgProfile} alt=""/>
                    </div>
                    </div>
                </header>
        </>
    )
}
export default Header