import React, { Component } from "react";
import Datacard from "./data-card";
import {
  FiMoreHorizontal,
  FiMoreVertical,
  ImFolderDownload,
  IoPaperPlane,
  FiTrendingUp,
} from "react-icons/all";
import Loadingbar from "./loadingbar";
import "./mainmenu.css";
import doughnut from "./donutpie.svg";
import graph from "./maingraph.svg";
class Mainmenu extends Component {
  state = {};
  render() {
    return (
      <div className="main-menu">
        <div className="main-menu-r1">
          <div className="main-menu-r1-c1">
            <Datacard
              name="Total Applications"
              number="7956"
              change="+3.59%"
              symbol="1"
            ></Datacard>
          </div>
          <div className="main-menu-r1-c2">
            <Datacard
              name="Shortlisted Candidates"
              number="4658"
              change="+6%"
              symbol="1"
            ></Datacard>
          </div>
          <div className="main-menu-r1-c3">
            <Datacard
              name="Total Applications"
              number="1501"
              change="-4%"
              symbol="0"
            ></Datacard>
          </div>
        </div>
        <div className="main-menu-r2">
          <div className="main-menu-r2-c1">
            <div className="main-menu-r2-c1-data">
              <div className="main-menu-r2-c1-data-name">
                Application Received
              </div>
              <div className="main-menu-r2-c1-data-timing">
                <div style={{ fontWeight: 600 }}>This Year</div>
                <div>This Week</div>
                <div>Today</div>
              </div>
              <div className="main-menu-r2-c1-data-download">
                <div className="main-menu-r2-c1-data-download-icondata">
                  <div>
                    <ImFolderDownload />
                  </div>
                  <div>Download Report</div>
                </div>
                <div>
                  <FiMoreVertical />
                </div>
              </div>
            </div>
            <div className="main-menu-r2-c1-graph">
              <img src={graph} alt="" className="main-graph" />
            </div>
          </div>
          <div className="main-menu-r2-c2">
            <div className="laoding-bar-heading"> Total Applications</div>
            <div className="loading-bar-symbol">
              <Loadingbar
                load="60px"
                color="blue"
                name="Application"
                className="application1"
              />
            </div>
            <div className="loading-bar-symbol">
              <Loadingbar
                load="100px"
                color="cyan"
                name="Shortlisted"
                className="application2"
              />
            </div>
            <div className="loading-bar-symbol">
              <Loadingbar
                load="40px"
                color="tomato"
                name="Rejected"
                className="application3"
              />
            </div>
            <div className="loading-bar-symbol">
              <Loadingbar
                load="20px"
                color="wheat"
                name="On hold"
                className="application4"
              />
            </div>
            <div className="loading-bar-symbol">
              <Loadingbar
                load="130px"
                color="purple"
                name="Payload"
                className="application5"
              />
            </div>
          </div>
        </div>
        <div className="main-menu-r3">
          <div className="main-menu-r3-c1">
            <div className="main-menu-r3-c1-detail">
              <div className="main-menu-r3-c1-title">
                Referals and Campaign Stats
              </div>
              <div className="main-menu-r3-c1-data">
                <div className="main-menu-r3-c1-data-div">
                  <div className="main-menu-r3-c1-data-symbol">
                    <IoPaperPlane color="red" />
                  </div>
                  <div className="main-menu-r3-c1-data-data">
                    <div style={{ color: "red", fontSize: "12px" }}>
                      40 Campaign sent in total
                    </div>
                    <div>4 Campaign sent in last month</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-menu-r3-c1-stats">
              <div className="main-menu-r3-c1-stats-data">
                <div className="main-menu-r3-c1-stats-data-data">
                  <div className="main-menu-r3-c1-stats-data-data-title">
                    Users Reached
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "40%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <FiTrendingUp color="blue" />
                      </div>
                      <div>+3.59%</div>
                    </div>
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-number">
                    7956
                  </div>
                </div>
                <div className="main-menu-r3-c1-stats-data-data">
                  <div className="main-menu-r3-c1-stats-data-data-title">
                    Referals
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "40%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <FiTrendingUp color="blue" />
                      </div>
                      <div>+9.01%</div>
                    </div>
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-number">
                    0662
                  </div>
                </div>
                <div className="main-menu-r3-c1-stats-data-data">
                  <div className="main-menu-r3-c1-stats-data-data-title">
                    Shares
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "40%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <FiTrendingUp color="blue" />
                      </div>
                      <div>+39.18%</div>
                    </div>
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-number">
                    1478
                  </div>
                </div>
                <div
                  className="main-menu-r3-c1-stats-data-data"
                  style={{ borderRight: "0px" }}
                >
                  <div className="main-menu-r3-c1-stats-data-data-title">
                    Users Reached
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-rating">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "40%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <FiTrendingUp color="blue" />
                      </div>
                      <div>+12.00%</div>
                    </div>
                  </div>
                  <div className="main-menu-r3-c1-stats-data-data-number">
                    0564
                  </div>
                </div>
              </div>
              <div className="main-menu-r3-c1-stats-buttons">
                <div
                  className="main-menu-r3-c1-stats-button"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Start a New Campaign now
                </div>
                <div
                  className="main-menu-r3-c1-stats-button"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Pause All Running Campaigns
                </div>
              </div>
            </div>
          </div>
          <div className="main-menu-r3-c2">
            <div className="main-menu-open-position">
              <div className="main-menu-open-position-text">
                Open Postion By Department
              </div>
              <div className="main-menu-open-position-symbol">
                <FiMoreHorizontal />
              </div>
            </div>
            <div className="main-menu-donut-chart">
              <div className="donut-position">
                <img src={doughnut} alt="" className="donut-pie-chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainmenu;
