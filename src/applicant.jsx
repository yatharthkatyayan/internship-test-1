import React, { Component } from "react";
import "./applicant.css";
import { AiFillMessage, IoIosCall, CgProfile } from "react-icons/all";
class Applicant extends Component {
  state = {};
  render() {
    return (
      <div className="applicant">
        <div className="applicant-data">
          <div className="applicant-pic">
            <CgProfile color="white" />
          </div>
          <div className="applicant-detail">
            <div className="applicant-detail-name">{this.props.name}</div>
            <div className="applicant-detail-job">
              <div> Applied to </div>
              <div style={{ color: "blue" }}>{this.props.job}</div>
            </div>
          </div>
        </div>
        <div className="applicant-contact">
          <AiFillMessage />
          <IoIosCall />
        </div>
      </div>
    );
  }
}

export default Applicant;
