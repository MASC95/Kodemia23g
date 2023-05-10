import React from 'react';

const Table1 = () => {
  return (
    <table className="table">
      <thead>
        <tr style={{backgroundColor: '#FAFAFB'}}>
          <th>Nombre</th>
          <th>Ubicación</th>
          <th>Posición</th>
          <th>Salario</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>New York</td>
          <td>Desarrollador Full Stack</td>
          <td>$80,000</td>
          <td>
            <button type="button" className="btn btn-info">Aplicando</button>
          </td>
        </tr>
        <tr style={{backgroundColor: '#FAFAFB'}}>
          <td>Jane Smith</td>
          <td>Los Angeles</td>
          <td>Diseñador de UI</td>
          <td>$65,000</td>
          <td>
            <button type="button" className="btn btn-info">Match</button>
          </td>
        </tr>
        <tr>
          <td>Bob Johnson</td>
          <td>Chicago</td>
          <td>Desarrollador Backend</td>
          <td>$75,000</td>
          <td>
            <button type="button" className="btn btn-info">Aceptado 1era Fase</button>
          </td>
        </tr>
        <tr style={{backgroundColor: '#FAFAFB'}}>
          <td>Maria White</td>
          <td>Tijuana</td>
          <td>Diseñadora</td>
          <td>$33,000</td>
          <td>
            <button type="button" className="btn btn-info">Aceptado 2da Fase</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table1;
