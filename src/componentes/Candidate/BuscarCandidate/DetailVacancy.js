
import {Link, useParams} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import Details from "./Details";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import { useNavigate } from 'react-router-dom';
export const DetailVacancy=()=>{
    const myParams = useParams();
    console.log(myParams);
    console.log("componente detail vacancy");

  

    return(
        <>
            <div className='dashboard'>
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
                                    <h1  className="text-start">Nombre de la vacante</h1>
                                       <div className="d-flex h-100  justify-content-around">
                                       </div> 
                                      </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                               <Details/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default DetailVacancy