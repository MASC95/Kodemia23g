import React from "react";
import { useState } from "react";
import "./draganddrop.scss";
import { BsThreeDots } from "react-icons/bs";

//terminado, se usa en reclutador.
const DragandDrop = () => {
    
  const [tasks, setTasks] = useState([
    {
      id: 1,
      body: "Candidato 1",
      list: 1,
    },
    {
      id: 2,
      body: "Candidato 2",
      list: 1,
    },
    {
      id: 3,
      body: "Candidato 3",
      list: 3,
    },
    {
      id: 4,
      body: "Candidato 4",
      list: 2,
    },
    {
      id: 5,
      body: "Candidato 5",
      list: 2,
    },
  ]);
  const getList = (list) => {
    return tasks.filter(item => item.list === list)
}

const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemID', item.id)
    console.log(item);
}

const draggingOver = (evt) => {
    evt.preventDefault();
}

const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData('itemID');
    const item = tasks.find(item => item.id == itemID);
    item.list = list;

    const newState = tasks.map(task => {
        if(task.id === itemID) return item;
        return task
    })

    setTasks(newState);
}

  return (
    <div className="main">
      <h1>Nombre de la vacante: Developer lista de
candidatos</h1>
      <br />
      <div className="drag-and-drop">
        <div className="column column--1">
          <h3>Primer Contacto <BsThreeDots className="mx-3"/></h3> 
          <div
            className="dd-zone"
            droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}
          >
            {getList(1).map((item) => (
              <div
                className="dd-element"
                key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}
              >
                
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="column column--2">
          <h3>Entrevista <BsThreeDots className="mx-3"/></h3>
          <div
            className="dd-zone zona2"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 2)}
          >
            {getList(2).map((item) => (
              <div
                className="dd-element elem2"
                key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)} 
              >
                
                <p className="body body2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="column column--3">
            <h3>
              Pruebas <BsThreeDots className="mx-3"/>
            </h3>
            <div className="dd-zone zona3" droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
            {getList(3).map(item => (
                            <div className='dd-element elem3' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                
                                <p className='body body3'>{item.body}</p>
                            </div>
                        ))}

            </div>
        </div>
        <div className="column column--4">
            <h3>
              Contratado <BsThreeDots className="mx-3"/>
            </h3>
            <div className="dd-zone zona4" droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 4))}>
            {getList(4).map(item => (
                            <div className='dd-element elem4' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                
                                <p className='body body4'>{item.body}</p>
                            </div>
                        ))}

            </div>
        </div>
      </div>
    </div>
  );
};


export default DragandDrop;