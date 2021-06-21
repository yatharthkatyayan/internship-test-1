import React, { Component } from "react";
import "./navbar.css";
import {
  IoMdExit,
  FiUsers,
  BsFolderFill,
  AiFillHome,
  IoLogoElectron,
  IoSettingsSharp,
  BiMessageAltDetail,
  BiCalendarCheck,
  GoGraph,
  CgNotes,
} from "react-icons/all";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="navbar-main">
          <div className="navbar-logo">
            <IoLogoElectron />
          </div>
          <div className="navbar-options">
            <div className="navbar-icon">
              <AiFillHome />
            </div>
            <div className="navbar-icon">
              <GoGraph />
            </div>

            <div className="navbar-icon">
              <CgNotes />
            </div>
            <div className="navbar-icon">
              <BsFolderFill />
            </div>
            <div className="navbar-icon">
              <BiCalendarCheck />
            </div>
            <div className="navbar-icon">
              <FiUsers />
            </div>

            <div className="navbar-icon">
              <BiMessageAltDetail />
            </div>
            <div className="navbar-icon">
              <IoMdExit />
            </div>
          </div>
        </div>
        <div className="navbar-settings">
          <IoSettingsSharp />
        </div>
      </div>
    );
  }
}

export default Navbar;
