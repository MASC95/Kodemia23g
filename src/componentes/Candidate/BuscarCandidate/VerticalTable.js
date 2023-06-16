import React from 'react'
//tabla vertical
//  #               |  Título   
//  1               |  Jr Fullstack
//  Tipo            |  Modalidad 
//  Por proyecto    |  Remoto  
//  Salario         |  Opciones
// $2500.00         |  Botón
const VerticalTable = ({vacancies, my_vacancies, handleStopApplying, handleApply}) => {
  const styleTable ={
    backgroundColor: '#498BA6',
    color:'white',
  }
  const styleTable2 ={
    backgroundColor: '#649cb3',
    color:'white',
  }
  return (
<div class="d-block d-sm-none">
{vacancies &&
                  vacancies?.map((item, index) => (
  <table className="mb-5">
    <tbody className='' >
      <tr className='tr-t py-5 px-5'>
        <th style={styleTable}>#</th>
        <td style={styleTable2}>Título</td>
      </tr>
      <tr className='tr-2'>
        <th className='py-4 px-4'>{index + 1}</th>
        <td className='py-4 px-4'>{item.title}</td>
      </tr>
      <tr className='tr-2'>
        <th style={styleTable} className='py-4 px-4' >Tipo</th>
        <td style={styleTable2} className='py-4 px-4'>Modalidad</td>
      </tr>
      <tr className='tr-2'>
        <th className='py-4 px-4'>{item.type}</th>
        <td className='py-4 px-4'>{item.mode}</td>
      </tr>
      <tr className='tr-2'>
        <th style={styleTable} className='py-4 px-4'>Salario</th>
        <td style={styleTable2} className='py-4 px-4'>Opciones</td>
      </tr>
      <tr className='tr-2'>
        <th className='py-4 px-4'>{item.salary}</th>
        <td className='py-4 px-4'>{my_vacancies?.find(
                          (myVac) => myVac._id === item._id
                        ) === undefined ? (
                          <button
                            type="submit"
                            id={item._id}
                            className="btn btn-outline-info buscar"
                            onClick={handleApply}
                            disabled={
                              my_vacancies?.find(
                                (myVac) => myVac._id === item._id
                              ) === undefined
                                ? false
                                : true
                            }
                          >
                            {my_vacancies?.find(
                              (myVac) => myVac._id === item._id
                            ) === undefined
                              ? "Aplicar"
                              : "Aplicando"}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-outline-danger "
                            id={item._id}
                            onClick={handleStopApplying}
                          >
                            Dejar de aplicar
                          </button>
                        )}<button class="btn btn-primary m-2 ">Abrir</button></td>
      </tr>
    </tbody>
  </table>))}
</div>

  )
}

export default VerticalTable 