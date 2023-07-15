import React from "react";
import { FaHome, FaBell, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../Recruiter/assets/img/logo.png";
import CustomDropDown from "./CustomDropDown/CustomDropDown";

const Navbar = () => {
  return (
    <div className="main-navbar-color w-100 p-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-3">
            <Link className="jobinder-logo" to="/">
              <img
                src={logo}
                alt="jobinder-logo"
                className="mt-2 mx-2"
                style={{ width: "120px", height: "45px" }}
              />
            </Link>
          </div>
          <div className="col-5"></div>
          <div className="col-4 d-flex justify-content-end">
            <CustomDropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
