import React, { Component } from "react";
import "./sidemenu.css";
import { BiChevronRight } from "react-icons/all";
import notification from "./notification.svg";
import Applicant from "./applicant";
class Sidemenu extends Component {
  state = {};
  render() {
    return (
      <div className="side-menu">
        <div className="side-menu-r1">
          <div className="notification-data">
            <p>
              Hello John Bayer,
              <br />
              You Have 8 New Application Today !!
            </p>
          </div>
          <img src={notification} alt="" className="application-notification" />
        </div>
        <div className="side-menu-r2">
          <div className="side-menu-r2-title">
            <div>New Applicants</div>
            <div>
              <BiChevronRight />
            </div>
          </div>
          <div>
            <Applicant name="Rosie Metts" job="IOS developer" />
          </div>
          <div>
            <Applicant name="James Scott" job="Node.js developer" />
          </div>
          <div>
            <Applicant name="Jamie Laurenson" job="marketing manager" />
          </div>
          <div>
            <Applicant name="Elizabeth hurton" job="IOS developer" />
          </div>
          <div>
            <Applicant name="Danny Watson" job="IOS developer" />
          </div>
          <div>
            <Applicant name="Reha Scarlett" job="IOS developer" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidemenu;
