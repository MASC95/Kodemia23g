import React from "react";
import { FaBars } from "react-icons/fa";
import imgProfile from "../../Recruiter/assets/img/perfil2.jpg";
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import FormRecruiter from "./Form/FormRecruiter";
import Softskills from "../../Recruiter/SoftSkills/Form/SoftSkills";

// import Softskills from "../../Recruiter/SoftSkills/SoftSkills";
export const ProfileCandidates = () => {
  // console.log('ProfileCandidates:...');
  return (
    <>
      <FormRecruiter />

      {/* <div className='dashboard'>
        <SidebarCandidate/>
        <div className='dashboard-app'>
           <header className='dashboard-toolbar'>
                <div className="row profile-container">
                    <div className="col">
                        <a href="#!" className="menu-toggle"><FaBars/></a>
                    </div> 
                <div className="col image-container">
                    <p>Sarah Jhonson</p>
                    <img src={imgProfile}/>
                </div>
                </div>
            </header>
            <div className='dashboard-content'>
                <div className='container'>
                    <div className='card'>
                        <div className="row">
                           <div className="col">
                            <div className='card-header d-flex gap-5'>
                                  </div>
                            </div> 
                        </div>
                        <div className='card-body'>
                           <h1 className="text-start">Información General</h1>
                            <FormRecruiter/>
                            <Softskills/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> */}
    </>
  );
};
export default ProfileCandidates;
