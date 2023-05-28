import {React,useEffect,useState} from "react";
import FormRecruiter from "./Form/FormRecruiter";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import imgProfile from '../assets/img/profile.png'
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


export const ProfileRecruiter=()=>{
    const perfil = JSON.parse(localStorage.getItem('accessToken'))
    const token=perfil['access_token']
    const navigate=useNavigate()
    // console.log('token: '+ token)
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    const destroy=parseJwt(token)
    // console.log(destroy['_id'])
    const id= destroy['_id']
    const [getInformation, setGetInformation]=useState({})
    useEffect(()=>{
        const fetch =async()=>{
            try {
                const endpointURL= `${endpointsGral.userURL}/${id}`;
                const queryUser= await axios.get(endpointURL);
                setGetInformation(queryUser.data)
                // console.log(queryUser)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    },[id])
    // console.log(getInformation)
    // --------------------------------------edit
    const onFormInputChange=(event)=>{
        const inputID=event.target.id
        const InputValue=event.target.value

        setGetInformation({
            ...getInformation,
            [inputID]:InputValue
        })
    }


    const onFormSubmit=(event)=>{
        event.preventDefault();
        editProfile()
        
    }
    const validDatas=(
        getInformation.name!==''&&
        getInformation.last_name!==''&&
        getInformation.rfc!==''&&
        getInformation.email!=='')

    const editProfile=async()=>{
        try {
        if(validDatas){
        const token = window.localStorage.getItem('token')
        console.log(token) 
        const headers = { 
            'Authorization':`Baerer ${token}`
        };
        const addPost=await axios.patch(`${endpointsGral.userURL}/${id}`,getInformation,{headers});  
        setGetInformation(addPost)
        swal({
            title: "Perfil Actualizado!",
            icon: "success",
            button: "ok!",
          });
        // navigate(`/Dashboard-Recruiter/vacancy`)

        }else{
           swal({
            title: "Error al actualizar!",
            text: "Todos los datos con requeridos!",
            icon: "error",
            button: "ok!",
          });
        }
        } catch (error) {
          console.log("Error in Petition");
        }

    }
    return(
        <>
        <div className='card-body'>
           <h1 className="text-start">Información General</h1> 
           <div className="row container_form_General">
            <div className="col-4 container_image">
                <img src={imgProfile}/>
                <p>Archivos permitidos .png, .jpg, jpeg</p>
                <div className="buttons_actions d-flex justify-content-center gap-3">  
                    <button type="button" className="buttons btn btn-info text-light">Subir</button>               
                    <button type="button" className="buttons btn btn-danger">Remover</button>
                </div>
            </div>
            <div className="col">
            <form onSubmit={onFormSubmit}>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label" for="form6Example1">Nombre</label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={getInformation.name}
                        onChange={onFormInputChange}
                        className="form-control" 
                        placeholder="Nombre"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Apellido</label>
                        <input type="text" 
                               id="last_name" 
                               name="last_name"
                               value={getInformation.last_name}
                               onChange={onFormInputChange}
                               className="form-control" 
                               placeholder="Apellido"/>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">RFC</label>
                            <input type="text" 
                                   id="rfc" 
                                   name="rfc"
                                   value={getInformation.rfc}
                                   onChange={onFormInputChange}
                                   className="form-control" 
                                   placeholder="RFC"/>
                        </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Email</label>
                        <input type="email" 
                               id="email" 
                               name="email"
                               value={getInformation.email}
                               onChange={onFormInputChange}
                               className="form-control" 
                               placeholder="Email"/>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Reset Password</label>
                        <input type="password" 
                               id="password" 
                               className="form-control"  
                            //    value={getInformation.password}
                            //    onChange={onFormInputChange}
                               placeholder="Reset Password"/>
                    </div>
                    </div>
                </div>
                <div className="buttons_actions d-flex justify-content-center gap-3">  
                    {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}
                    
                    <button type="submit" className="buttons btn btn-info text-light">Guardar</button> 

                </div>
            </form>
            </div>
        </div>
        </div>
                   
    </>
    )
    
}
export default ProfileRecruiter