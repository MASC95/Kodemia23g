import PostVacancy from "./Forms/PostVacancy";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
// import Softskills from "../SoftSkills/Form/SoftSkills";
export const AddVacancy=()=>{
    const [valueIdVacancy, setValueIdVacancy]=useState()
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
    console.log(destroy['_id'])
    const id= destroy['_id']
    
  
    
    const formik= useFormik({
        initialValues: {
            companyName:`64406a93e56432b37db279d0`,
            title:'',
            type:'',
            mode:'',
            city:'',
            salary:'',
            status:'',
            activities:''
        },
        validationSchema:Yup.object({
            title:Yup.string().required('Requerido'),
            type:Yup.string().required('Requerido'),
            mode:Yup.string().required('Requerido'),
            city:Yup.string().required('Requerido'),
            salary:Yup.number().required('Requerido'),
            status:Yup.string().required('Requerido'),
            activities:Yup.string().required('Requerido'),
        }),
        onSubmit:(values) => {
            setTimeout(() => {
              axios
                .post(endpointsGral.vacancyURL, values) 
                .then(response => {
                    console.log(response)
                    setValueIdVacancy(response.data)
                    // setValueIdVacancy(dataObj)
                })
                
                .catch(error => {
                  console.log(error.response);
                });
              console.log({ values});
              alert(JSON.stringify(values, null, 2));
            }, 400);
          }
      });

      console.log(valueIdVacancy)
    //   const idVacante=()=>{
    //     alert('hola')
    //   }

    return(
        <>
          {/* <div className='card-body '> */}
          <h1  className="text-start d-sm-flex-text-center h2 mt-2 text-dark">Crear Vacante</h1>
                <PostVacancy/>
                {/* <Softskills/> */}
            {/* </div> */}
        </>
    )
}
export default AddVacancy