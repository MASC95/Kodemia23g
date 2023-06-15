import React from 'react'
//tabla vertical
//  #               |  Título   
//  1               |  Jr Fullstack
//  Tipo            |  Modalidad 
//  Por proyecto    |  Remoto  
//  Salario         |  Opciones
// $2500.00         |  Botón
const VerticalTable = () => {
  const styleTable ={
    backgroundColor: '#498BA6',
    color:'white',
  }
  const styleTable2 ={
    backgroundColor: '#649cb3',
    color:'white',
  }
  return (
<div className="d-block d-sm-none">
  <table className="table">
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
        <td><button className="btn btn-primary">Abrir</button></td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

export default VerticalTable