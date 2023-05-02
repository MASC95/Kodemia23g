import React from "react";

export const PatchVacancy=()=>{
    return(
        <>
           <div className="container mt-2 p-5 w-100 " id="formGral">
            <h2>Información de la vacante</h2>
            <form>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label" for="form6Example1">Título</label>
                        <input type="text" id="title" className="form-control" placeholder="Título"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Tipo de trabajo</label>
                        <select className="form-control" id="type_work">
                            <option> Selecciona</option>
                            <option> Tiempo Completo</option>
                            <option> Por proyecto</option>
                        </select>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Modalidad</label>
                            <select className="form-control" id="modalidad">
                                <option> Selecciona</option>
                                <option> Presencial</option>
                                <option> Remoto</option>
                                <option> Hibrído</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Ciudad</label>
                        <input type="text" id="city" className="form-control" placeholder="Ciudad"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Sueldo</label>
                        <input type="text" id="salary" className="form-control"  placeholder="Sueldo"/>

                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Actividades</label>
                        <input type="text" id="actividades" className="form-control"  placeholder="Actividades"/>
                    </div>
                    </div>
                </div>
                <div className="buttons_actions">  
                    {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}
                    <button type="button" className="buttons btn btn-outline-info">Guardar</button>               
                </div>
            </form>
        </div>
        </>
    )

}
export default PatchVacancy