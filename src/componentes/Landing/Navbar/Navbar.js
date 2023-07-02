import React from "react";
import { FaHome, FaBell, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
//import './navbar.scss'
import logo from "../../Recruiter/assets/img/logo.png";
import CustomDropDown from "./CustomDropDown/CustomDropDown";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between p-2" style={{ backgroundColor: "#498BA6" }}>
        <div className="">
            <Link
              className=" "
              to="/"
            >
              <img
                src={logo}
                alt="jobinder-logo"
                className=""
                style={{ width: "120px ", height: "45px" }}
              ></img>
            </Link>
          </div>  

        <CustomDropDown />
    
    </div>
  );
};

export default Navbar;
