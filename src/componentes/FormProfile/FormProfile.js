import React from "react";

export const FormProfile=()=>{
    return(
        <>
        <div className="container mt-2 p-5 w-100">
            <h1>Información General</h1>
        <form>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline bg-gray">
                    <input type="text" id="form6Example1" className="form-control"  />
                    <label className="form-label" for="form6Example1">Nombre</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" />
                    <label className="form-label" for="form6Example2">Apellido</label>
                </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" />
                    <label className="form-label" for="form6Example1">Edad</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" />
                    <label className="form-label" for="form6Example2">Genero</label>
                </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" />
                    <label className="form-label" for="form6Example1">Nivel de Estudios</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" />
                    <label className="form-label" for="form6Example2">Experiencia</label>
                </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" />
                    <label className="form-label" for="form6Example1">Email</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" />
                    <label className="form-label" for="form6Example2">Contraseña</label>
                </div>
                </div>
            </div>
            <div className="buttons_actions justify-content-around">
            <div className="row">
                <div className="col-8">
                </div>
                <div className="col-4 d-flex justify-content-around">
                 <button type="button" class="btn btn-info">Cancelar</button>
                <button type="button" class="btn btn-outline-info">Crear</button>
                </div>
            </div>
               
            </div>
        </form>
        </div>

        </>
    )
}

export default FormProfile