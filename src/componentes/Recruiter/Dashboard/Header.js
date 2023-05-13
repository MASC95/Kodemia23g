import React from "react";
import { FaBars} from 'react-icons/fa';
import imgProfile from '../assets/img/profile.png'
export const Header=()=>{
    // console.log(postdata)
    return(
        <>
         <header className='dashboard-toolbar'>
                    <div className="row profile-container">
                        <div className="col">
                            <a href="#!" className="menu-toggle"><FaBars/></a>
                        </div> 
                    <div className="col image-container">
                        <p>User</p>
                        {/* <p>{postdata.name+' '+ postdata.last_name}</p> */}
                        <img src={imgProfile}/>
                    </div>
                    </div>
                </header>
        </>
    )
}
export default Header