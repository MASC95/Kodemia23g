import {FaEdit, FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './style.scss'

export const ListVacancy=({postdata})=>{
        return(
            <>
            <div className="container mt-2 p-5 w-100 " id="formGral">
            <div className="row softskills">
                <div className="col">
                <table className="table">
                    <thead className="thead-dark bg-body-secondary">
                        <tr>
                        <th scope="col">TITULO</th>
                        <th scope="col">TIPO DE TRABAJO</th>
                        <th scope="col">MODALIDAD</th>
                        <th scope="col">SALARIO</th>
                        <th scope="col">OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { postdata.map((item)=>{
                            const idVacancy=item._id
                                return(
                                    <tr>
                                    <td>{item.title}</td>
                                    <td>{item.type}</td>
                                    <td>{item.mode}</td>
                                    <td>{item.salary}</td>
                                    <td className="options_buttons d-flex justify-content-center gap-3">
                                        <Link to={`/Dashboard-Recruiter/vacancy-edit/?v=${idVacancy}`}>
                                            <FaEdit className="icon_edit"/>
                                        </Link>
                                        <button type='button'className="icon_trash"><FaTrash className="icon_trash"/></button>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                </div>
            </div>
          
            </div>
            </>
        )
    // })
}
export default ListVacancy