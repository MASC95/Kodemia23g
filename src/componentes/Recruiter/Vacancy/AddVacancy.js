import PostVacancy from "./Forms/PostVacancy";

export const AddVacancy=()=>{
    return(
        <>
          <div className='card-body '>
            <h1  className="text-start"><b>Agregar Vacante</b></h1>
                <PostVacancy/>
                {/* <Softskills/> */}
            </div>
        </>
    )
}
export default AddVacancy