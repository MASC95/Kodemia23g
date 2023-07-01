import PostVacancy from "./Forms/PostVacancy";
// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { useFormik } from "formik";
// import * as Yup from 'yup';
// import axios from "axios";
// import { endpointsGral } from "../services/vacancy";
// import Softskills from "../SoftSkills/Form/SoftSkills";
export const AddVacancy=()=>{

    return(
        <>
          {/* <div className='card-body'> */}
          <h1  className="text-center d-sm-flex-text-center h2 mt-2 text-dark">Crear Vacante</h1>
                <PostVacancy/>
                {/* <Softskills/> */}
            {/* </div> */}
        </>
    )
}
export default AddVacancy