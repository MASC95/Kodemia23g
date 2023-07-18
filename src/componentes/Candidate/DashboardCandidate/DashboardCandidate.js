import React, { useState, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import imgProfile from "../../Recruiter/assets/img/perfil2.jpg";
import { Outlet } from "react-router-dom";
import useJob from "../../../hooks/useJob";
import "./styleDashboard.css";
import NavbarCandidate from "./NavbarCandidate/NavbarCandidate";
import Footer from "../../Landing/Footer/Footer";

export const DashboardCandidate = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);
  const [dataCandidate] = useJob();
  const { name, last_name, avatar_url } = dataCandidate;
  /* const isUserLoggedIn = !!LoginCandidate.accessToken; */
  const isUserLoggedIn = true;
  const handleIsVisibleSidebar = () => {
    setIsVisibleSidebar((prev) => !prev);
  };

  return (
    <>
      <NavbarCandidate />

      <Outlet />
      <Footer />
    </>
  );
};
export default DashboardCandidate;
