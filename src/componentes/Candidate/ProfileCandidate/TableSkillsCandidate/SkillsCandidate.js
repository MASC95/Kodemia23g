import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { FaTrash, FaCode } from "react-icons/fa";
import { myId } from "../../../lib/myLib";

const SkillsCandidate = ({
  dataSkillsInUser,
  loadingSkillsInUser,
  handleDeleteSkill,
}) => {
  const childHandleDeleteSkill = (id) => {
    //console.log("Eliminando Skill (hijo):..", id);
    handleDeleteSkill(id);
  };

  useEffect(() => {
    // console.log("dataSkillsInUser:..", dataSkillsInUser);
  }, [dataSkillsInUser]);

  return (
    <>
      <h2
        style={{
          backgroundColor: "#498ba6",
          color: "#f2f2f2",
          textAlign: "center",
          textShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 1px 3px",
          borderRadius: "15px 15px 0px 0px",
          marginBottom: "0px",
          fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          marginTop: "30px",
        }}
      >
        <FaCode style={{ marginRight: "10px" }} />
        Mis Skills
      </h2>
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
                <td>
                  <button
                    type="button"
                    onClick={() => childHandleDeleteSkill(item._id)}
                    className=" btn btn-outline-danger"
                  >
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
