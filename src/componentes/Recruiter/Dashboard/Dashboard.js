import { React, useEffect } from "react";
// import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import NavbarRecruiter from "../SidebarRecruiter/NavbarRecruiter";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useJob from "../../../hooks/useJob";
import Footer from "../../Landing/Footer/Footer";

export const Dashboard = () => {
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  useEffect(() => {
    // console.log('dashborad data',dataRecruiter)
  }, [dataRecruiter]);

  //style={{position:'fixed', zIndex:'1000000'}}
  return (
    <>
      <div className="w-100 mb-0">
        <NavbarRecruiter />
      </div>
      <div style={{ marginTop: "0px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
