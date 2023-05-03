import React from "react";
import imgProfile from '../../assets/img/profile.png'
import '../scss/style.scss'

export const FormRecruiter=()=>{
    return(
        <>
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
            <form>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label" for="form6Example1">Nombre</label>
                        <input type="text" id="title" className="form-control" placeholder="Nombre"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Apellido</label>
                        <input type="text" id="city" className="form-control" placeholder="Apellido"/>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">RFC</label>
                            <input type="text" id="city" className="form-control" placeholder="RFC"/>
                        </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Email</label>
                        <input type="text" id="city" className="form-control" placeholder="Email"/>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Reset Password</label>
                        <input type="text" id="salary" className="form-control"  placeholder="Reset Password"/>
                    </div>
                    </div>
                </div>
                <div className="buttons_actions d-flex justify-content-center gap-3">  
                    {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}
                    
                    <button type="button" className="buttons btn btn-info text-light">Guardar</button> 

                </div>
            </form>
            </div>
        </div>
        </>
    )

}
export default FormRecruiter