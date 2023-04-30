import React from "react";
import './scss/style.scss'

export const FormProfile=()=>{
    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
            <h1>Información General</h1>
        <form>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline bg-gray">
                    <label className="form-label" for="form6Example1">Nombre</label>
                    <input type="text" id="name" className="form-control" placeholder="Jhon"/>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" for="form6Example2">Apellido</label>
                    <input type="text" id="lastname" className="form-control" placeholder="Dick" />
                </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" for="form6Example1">Edad</label>
                    <input type="text" id="age" className="form-control" placeholder="27"/>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" for="form6Example2">Genero</label>
                    <input type="text" id="gender" className="form-control"  placeholder="Genero"/>

                </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" for="form6Example1">Nivel de Estudios</label>
                    <select className="form-control" id="bachelor">
                        <option> Selecciona</option>
                        <option> Carrera técnica</option>
                        <option> Licenciatura</option>
                        <option> Especialidad</option>
                        <option> Carrera trunca</option>
                    </select>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" for="form6Example2">Email</label>
                    <input type="email" id="email" className="form-control" />
                </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <label className="form-label" for="form6Example1">Experiencia</label>
                    <input type="text" id="wirkingExperience" className="form-control" />
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

export default FormProfile