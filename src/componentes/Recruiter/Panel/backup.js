import { React, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";
import Panel from "./Panel";
import { BsThreeDots } from "react-icons/bs";
import { endpointsGral } from "../services/vacancy";
import { useSearchParams } from "react-router-dom";
import { idPhaseOne } from "../../lib/myLib";
import { myId } from "../../lib/myLib";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Reclutamiento = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [candidatos, setCandidatos] = useState([]);
  const [dataApplicants, setDataApplicants] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const idVacancy = searchParams.get("v");
  const navigate= useNavigate();

  //console.log('searchParams:..',searchParams.get('v'));

  useEffect(() => {
    cargarDatos();
  }, []);

  useEffect(() => {
    console.log("state candidatos:..", candidatos);
  }, [candidatos]);

  const cargarDatos = async () => {
    setShowSpinner(true);
    const phases = ["Llamada", "Entrevista", "Pruebas", "Contratado"];
    let tempDataApplicants = [];

    for (const phase of phases) {
      const listNumber = phases.indexOf(phase) + 1;

      const endpointPhase = `${endpointsGral.phaseUrlGetPhase}?phase=${phase}`;
      try {
        const result = await axios.get(endpointPhase);
        const dataVacancies = result.data.infoPhase.vacancies;
        console.log("dataVacancies:...", dataVacancies, idVacancy);
        const arrayIdsApplicants = dataVacancies.find(
          (item) => String(item.idVacancie) === idVacancy
        );
        console.log("dataApplicants(ROR):..", arrayIdsApplicants);

        if (arrayIdsApplicants) {
          for (let i = 0; i < arrayIdsApplicants?.applicants?.length; i++) {
            const response = await axios.get(
              `${endpointsGral.userURL}getUser/${arrayIdsApplicants.applicants[i]}`
            );
            if (response) {
              const applicant = response?.data?.user;

              tempDataApplicants = [
                ...tempDataApplicants,
                {
                  ...applicant,
                  list: listNumber,
                  body: `${applicant.name} ${applicant.last_name}`,
                },
              ];
              //console.log('response DataApplicants:...',response?.data?.user);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    setCandidatos([...tempDataApplicants]);
    setShowSpinner(false);
  };

  const getList = (list) => {
    return candidatos.filter((item) => item.list === list);
  };
  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item._id);
    console.log(item);
  };
  const draggingOver = (evt) => {
    evt.preventDefault();
  };
  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = candidatos.find((item) => item._id == itemID);
    item.list = list;
    const newState = candidatos.map((task) => {
      if (task._id === itemID) return item;
      return task;
    });
    setCandidatos(newState);
  };

  const handleSave = async () => {
    console.log("Guardando cambios:...");
    
    Swal.fire({
      title: "Guardar Cambios",
      text: "Estas seguro de guardar los cambios!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Guardar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          let dataBody = {
            idVacancie:idVacancy,
            listIdsApplicantsPhase1:[],
            listIdsApplicantsPhase2:[],
            listIdsApplicantsPhase3:[],
            listIdsApplicantsPhase4:[],
          };
          candidatos.forEach((item)=>{
            if(item.list===1) {
              dataBody.listIdsApplicantsPhase1=[
                ...dataBody.listIdsApplicantsPhase1, item._id
              ]
            }
            if(item.list===2) {
              dataBody.listIdsApplicantsPhase2=[
                ...dataBody.listIdsApplicantsPhase2, item._id
              ]
            }
            if(item.list===3) {
              dataBody.listIdsApplicantsPhase3=[
                ...dataBody.listIdsApplicantsPhase3, item._id
              ]
            }
            if(item.list===4) {
              dataBody.listIdsApplicantsPhase4=[
                ...dataBody.listIdsApplicantsPhase4, item._id
              ]
            }
            
          })
          const response = await axios.post(
            `${endpointsGral.phaseURL}updatePanel`,
            dataBody
          );
          console.log("Updating Panel de Reclutamiento:...", response);
          if(response){
            Swal.fire({
              title: "Guardar Cambios",
              text: "Los cambios Han sido Guardados con Exito!!",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "ok!",
            }).then( (result) => {
              if (result.isConfirmed) {
                navigate('/dashboard-recruiter/match');
              }
            });

          }
        } catch (error) {
          console.log(error);
        }

      }
    });

    
  };

  return (
    <div className="main">
      <h1 className="text-dark">Panel de reclutamiento</h1>
      {showSpinner&& <span className="d-flex justify-content-center"><Spinner/></span> }
      
      <br />
      <div className="drag-and-drop">
        <div className="column column--1">
          <h3 className="text-dark">
            Primer Contacto <BsThreeDots className="mx-3" />
          </h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 1)}
          >
            {getList(1).map((item) => (
              <div
                className="dd-element"
                key={myId()}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="column column--2">
          <h3 className="text-dark">
            Entrevista <BsThreeDots className="mx-3" />
          </h3>
          <div
            className="dd-zone zona2"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 2)}
          >
            {getList(2).map((item) => (
              <div
                className="dd-element elem2"
                key={myId()}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <p className="body body2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="column column--3">
          <h3 className="text-dark">
            Pruebas <BsThreeDots className="mx-3" />
          </h3>
          <div
            className="dd-zone zona3"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 3)}
          >
            {getList(3).map((item) => (
              <div
                className="dd-element elem3"
                key={myId()}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <p className="body body3">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="column column--4">
          <h3 className="text-dark">
            Contratado <BsThreeDots className="mx-3" />
          </h3>
          <div
            className="dd-zone zona4"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 4)}
          >
            {getList(4).map((item) => (
              <div
                className="dd-element elem4"
                key={myId()}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <p className="body body4">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="btn btn-info text-light mt-4 ms-auto d-block me-1"
        onClick={handleSave}
      >
        Guardar Cambios
      </button>
    </div>
  );
};
export default Reclutamiento;

// <>
//   <div className='card-header d-flex gap-3'>
//       <h2 className="text-start">Titulo: {dataByUserCandidate.title}</h2>
//   </div>
//   <div className='card-body'>
//       <Panel/>
//   </div>
// </>
