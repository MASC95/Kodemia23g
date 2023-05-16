import React, { useEffect, useState } from "react";
import './scss/style.scss'
import { Link } from "react-router-dom";
import axios from "axios";
import '../Alerts/Alert'
export const ListBuscar=()=>{
    const data = [{
        id: '23',
        title: 'frontend-dev',
        type: "juan",
        modality: 'hybrid',
        income: '$33,300.00',   
    },
    {
        id: '24',
        title: 'backend-dev',
        type: "rafa",
        modality: 'online',
        income: '$73,300.00',
    }
]

    
    
    const VacanciesTable =()=>{
    const [vacancies, setVacancies] = useState([]);
   /*  const [showAlert, setShowAlert] = useState(false); */
    useEffect(() => {
        const fetchVacancies = async () => {
          try {
            const response = await axios.get("URL_DEL_ENDPOINT_DE_VACANTES");
            setVacancies(response.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchVacancies();
      }, []);
    
   /*    const handleApply = () => {

        setShowAlert(true);
      }; */
}


    return(
        <>
            <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">TITULO</th>
                    <th scope="col">TIPO DE TRABAJO</th>
                    <th scope="col">MODALIDAD</th>
                    <th scope="col">SALARIO</th>
                    <th scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody> 
                    {data.map(item => (<tr key={item.id
                    }>
                    <th scope="row">1</th>
                    <td >{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.modality}</td>
                    <td>{item.income}</td>
                    <td className="options_buttons d-flex justify-content-center gap-3">
                          <button type="submit" className="btn btn-outline-info buscar" onClick={ () => alert(item.id)}>Aplicar</button>
                        <Link to="/welcome-candidate/search-vacancy">
                          <button type="submit" href="" className="btn btn-info text-light">Abrir</button>
                        </Link>
                    </td>
                    </tr>))}
                </tbody>
            </table>
            </div>
        </div>
      
        </div>
      {/*   {showAlert && <Alert />} */}
        </>
    )
}
export default ListBuscar