import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { FaTrash } from "react-icons/fa";
import { myId } from "../../../lib/myLib";

const SkillsCandidate = ({ dataSkillsInUser, loadingSkillsInUser, handleDeleteSkill }) => {


  const childHandleDeleteSkill = (id) => {
    //console.log("Eliminando Skill (hijo):..", id);
    handleDeleteSkill(id)
  };

  useEffect(() => {
    console.log("dataSkillsInUser:..", dataSkillsInUser);
  }, [dataSkillsInUser]);

  return (
    <>
      <h2>Mis Skills</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Level</th>
            <th>Opciones</th>
          </tr>
        </thead>

        <tbody>
          {dataSkillsInUser?.map((item) => {
            return (
              <tr key={myId()}>
                <td>{item.name}</td>
                <td>{item.level}</td>
                <td >
                  <button type="button" onClick={()=>childHandleDeleteSkill(item._id)} className=" btn btn-outline-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SkillsCandidate;
