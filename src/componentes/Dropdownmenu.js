/**
 * The function returns a dropdown menu component with icons for profile, search, suitcase, and logout.
 * @returns A React component called Dropdownmenu, which renders a collapsible sidebar navigation menu
 * with four clickable items/icons: MdAccountCircle, BsSearch, FaSuitcase, and IoLogOutOutline.
 */
import React from "react";
import "./dropdownmenu.scss";
import { MdAccountCircle } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const Dropdownmenu = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="bg-dark col-auto col-md-2 min-vh-100 ">
            <div className="bg-dark p-2">
            <a className="d-flex text-decoration-none mt-1 align-items-center text-white">
            <span className="fs-4 d-none d-sm-inline ">
              JOBINDER
            </span>
            </a>
           

            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a
                  href="#!"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <span className="profile-pic">
                    <MdAccountCircle size={40} color="white"/>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#!"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <span className="profile-pic">
                    <MdAccountCircle size={40} color="white"/> <h3 className="text-white">esto es una prueba</h3>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="!#"
                  className="list-group-item list-group-item-action py-2 ripple active"
                >
                  <span className="profile-pic">
                    <BsSearch size={40} color="white"/>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#!"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <span className="profile-pic">
                    <FaSuitcase size={40} color="white" />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#!"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <span className="profile-pic">
                    <IoLogOutOutline size={40} color="white"/>
                  </span>
                </a>
              </li>
            </ul>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dropdownmenu;
