import React, { Component } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import "./upinfo.css";

class Upinfo extends Component {
  state = {};
  render() {
    return (
      <div className="upinfo">
        <div className="login-detail">
          <div className="upinfo-dropdown">
            <RiArrowDropDownLine color="white" />
          </div>
          <div className="upinfo-profile-pic">
            <CgProfile color="white" />
          </div>
          <div className="upinfo-username">John Boyer</div>
          <div className="upinfo-notification">
            <IoMdNotifications color="white" />
          </div>
        </div>
        <div className="dashboard">Dashboard</div>
        <div className="search-bar">
          <div className="date-day">
            <div className="day">Monday,</div>
            <div className="date">02 july 2020</div>
          </div>
          <div className="search-button">
            <div className="search-application">
              <BiSearch color="white" />
              <div className="search-box">Search for Application here</div>
            </div>
            <div className="add-button">+ Add</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upinfo;
