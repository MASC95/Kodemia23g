import React from "react";
import { FaBars } from "react-icons/fa";

import imgProfile from "../../Recruiter/assets/img/perfil2.jpg";
import ListBuscar from "./ListBuscar";
import HorizonTable from "./HorizonTable";
import RemoteSortTable from "./RemoteSortTable";
export const Buscar = () => {
  return (
    <>
      <div className="card-body">
        <h1
          className="text-center my-3"
          style={{
            color: "#498BA6",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          Buscar Vacantes
        </h1>

        {/* <ListBuscar /> */}
        <RemoteSortTable/>
      </div>
    </>
  );
};
export default Buscar;
