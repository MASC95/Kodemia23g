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
  <table class="table mb-5">
    <tbody>
      <tr>
        <th style={styleTable}>#</th>
        <td style={styleTable2}>Título</td>
      </tr>
      <tr>
        <th>1</th>
        <td>Jr Fullstack</td>
      </tr>
      <tr>
        <th style={styleTable}>Tipo</th>
        <td style={styleTable2}>Modalidad</td>
      </tr>
      <tr>
        <th>Por proyecto</th>
        <td>Remoto</td>
      </tr>
      <tr>
        <th style={styleTable}>Salario</th>
        <td style={styleTable2}>Opciones</td>
      </tr>
      <tr>
        <th>$2500.00</th>
        <td>
        {my_vacancies?.find(
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
                            className="btn btn-outline-danger"
                            id={item._id}
                            onClick={handleStopApplying}
                          >
                            Dejar de aplicar
                          </button>
                        )}
            <button className="btn btn-primary">Abrir</button>
        </td>
      </tr>
    </tbody>
  </table>
        ))}
</div>

  )
}

export default VerticalTable