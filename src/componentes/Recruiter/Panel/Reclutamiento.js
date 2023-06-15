import {React, useEffect, useState} from "react";
import {Link,Outlet,useParams} from 'react-router-dom'
import axios from "axios";
import Panel from "./Panel";
import { endpointsGral } from "../services/vacancy";

export const Reclutamiento=()=>{
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const idVacancy = urlParams.get('v');
  console.log(idVacancy)

  const [dataByUserCandidate,setDataByUserCandidate]=useState([])
  const [dataByPhase,setDataByPhase]=useState([])
  const fetchForVacancy=async()=>{
    try {
        const endpointURL=`${endpointsGral.vacancyURL}${idVacancy}`;
        const response= await axios.get(endpointURL)
        const datasVacancy=response.data['infoVacancy']
        setDataByUserCandidate(datasVacancy);  
      } catch (error) {
          console.log(error)
      }
    }

  useEffect(()=>{
        fetchForVacancy()
   },[])

   const fetchForPhase=async()=>{
    try {
        const response= await axios.get(endpointsGral.phaseURL)
        const datasPhase=response.data['item']
        setDataByPhase(datasPhase['docs']);  
      } catch (error) {
          console.log(error)
      }
    }

  useEffect(()=>{
        fetchForPhase()
   },[])

   console.log('phase', dataByPhase)

   const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarea 1",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 2,
      title: "Tarea 2",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 3,
      title: "Tarea 3",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 3,
    },
    {
      id: 4,
      title: "Tarea 4",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 2,
    },
    {
      id: 5,
      title: "Tarea 5",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
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


    return(
      <> 
      
      <div className="card-body main">
        <h2 className="text-dark">{dataByUserCandidate.title}</h2>
        <br />
        <div className="drag-and-drop">
          {dataByPhase?.map((item)=>{
            console.log(item.name)
            return(
              <div className="column column--1">
                <h3>{item.name}</h3>
                <div
                  className="dd-zone"
                  droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}
                >
                  {getList(1).map((item) => (
                    <div
                      className="dd-element"
                      key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}
                    >
                      <strong className="title">{item.title} </strong>
                      <p className="body">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </>
       
    )
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