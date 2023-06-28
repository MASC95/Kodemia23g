import PostVacancy from "./Forms/PostVacancy";
// import Softskills from "../SoftSkills/Form/SoftSkills";
export const AddVacancy=()=>{
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