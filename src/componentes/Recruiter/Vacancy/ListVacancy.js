// import {FaEdit, FaTrash} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
// import { myId } from '../../lib/myLib'
// import axios from 'axios'
// import './style.scss'

// export const ListVacancy=({postdata})=>{
    
//     const handleDeleteSkill = (id) => {
//         // const skillToDelete = skillTemp[index];
    
//         // if (skillToDelete) {
//         //   const updatedSkills = skillTemp.filter((_, i) => i !== index);
//         //   setSkillTemp(updatedSkills);
//         // } else {
//         //   console.log("error al eliminar");
//         // }

//         setTimeout(() => {
//             // const idsSkills =  listSkills.map(item=>item.skill);
            
//             // const completeForm = {
//             //     ...values,
//             //     job_skills:[...idsSkills]
//             // }
//             console.log('completeForm:...', completeForm)


//             axios.defaults.headers.common[
//                 "Authorization"
//               ] = `Bearer: ${dataRecruiter.accessToken}`;
//           axios
//             // .patch(endpointsGral.vacancyURL, completeForm) 
//             .patch(`${endpointsGral.vacancyURL}${idVacancy}`, completeForm)
//             .then(response => {
//               console.log(response);
//               swal({
//                 title: "Vacante editada!!",
//                 icon: "success",
//                 button: "ok!",
//             });
//             })
//             .catch(error => {
//               console.log(error.response);
//             });
//         //   console.log({ values});
//         //   alert(JSON.stringify(completeForm, null, 2));
//         }, 400);
//       };
//         return(
//             <>
//             <div className="container mt-2 p-5 w-100 " id="formGral">
//             <div className="row softskills">
//                 <div className="col">
//                 <table className="table">
//                     <thead className="thead-dark bg-body-secondary">
//                         <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">TITULO</th>
//                         <th scope="col">TIPO DE TRABAJO</th>
//                         <th scope="col">MODALIDAD</th>
//                         <th scope="col">SALARIO</th>
//                         <th scope="col">OPCIONES</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                        
//                         { postdata.map((item, index)=>{
//                             const idVacancy=item._id
//                                 return(
//                                     <tr key={myId()}>
//                                    <td>{index+1}</td>
//                                     <td>{item.title}</td>
//                                     <td>{item.type}</td>
//                                     <td>{item.mode}</td>
//                                     <td>{item.salary}</td>
//                                     <td className="options_buttons d-flex justify-content-center gap-3">
//                                         <Link to={`/Dashboard-Recruiter/vacancy-edit/?v=${idVacancy}`}>
//                                             <FaEdit className="icon_edit"/>
//                                         </Link>
//                                         <FaTrash className="icon_trash" onClick={() => handleDeleteSkill(idVacancy)}/>
//                                         {/* <button type='button' className="icon_trash"><FaTrash className="icon_trash"/></button> */}
//                                     </td>
//                                     </tr>
//                                 )
//                             })
//                         }
                        
//                     </tbody>
//                 </table>
//                 </div>
//             </div>
          
//             </div>
//             </>
//         )
//     // })
// }
// export default ListVacancy