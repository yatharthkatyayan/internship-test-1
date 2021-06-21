import React, { Component } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "./loadingbar.css";
class Loadingbar extends Component {
  state = {};

  render() {
    return (
      <div className="loading-bar">
        <div className="loading-data">
          <div className="loading-dot" style={{ color: this.props.color }}>
            <GoPrimitiveDot />
          </div>
          <div
            className="loading-bar-name"
            style={{
              color: this.props.color,
            }}
          >
            {this.props.name}
          </div>
        </div>
        <div className="loading-bar-load-symbol">
          <div
            className="loading-bar-load"
            style={{
              backgroundColor: this.props.color,
              width: this.props.load,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Loadingbar;
