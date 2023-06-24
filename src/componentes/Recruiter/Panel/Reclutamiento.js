import {React, useEffect, useState} from "react";
import {Link,Outlet,useParams} from 'react-router-dom'
import axios from "axios";
import Panel from "./Panel";
import { BsThreeDots } from "react-icons/bs";
import { endpointsGral } from "../services/vacancy";

export const Reclutamiento=()=>{
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
      <h1 className="text-dark">Panel de reclutamiento</h1>
      <br />
      <div className="drag-and-drop">
        <div className="column column--1">
          <h3 className="text-dark">Primer Contacto <BsThreeDots className="mx-3"/></h3>
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
          <h3 className="text-dark">Entrevista <BsThreeDots className="mx-3"/></h3>
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
            <h3 className="text-dark">
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
            <h3 className="text-dark">
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
}
export default Reclutamiento


 // <>        
        //   <div className='card-header d-flex gap-3'>
        //       <h2 className="text-start">Titulo: {dataByUserCandidate.title}</h2>     
        //   </div>
        //   <div className='card-body'>
        //       <Panel/>
        //   </div>
        // </>