import React, { Component } from "react";
import Mainmenu from "./mainmenu";
import Sidemenu from "./sidemenu";
import Upinfo from "./upinfo";
import "./home.css";
import Navbar from "./navbar";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="home-padder">
          <div className="home-navbar">
            <Navbar />
          </div>
          <div className="home-display-content">
            <div className="home-upinfo">
              <Upinfo />
            </div>
            <div className="home-main-content">
              <div className="home-main-menu">
                <Mainmenu />
              </div>
              <div className="home-side-menu">
                <Sidemenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
