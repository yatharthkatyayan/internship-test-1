import React, { Component } from "react";
import "./data-card.css";
import { FiMoreHorizontal, FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import donut from "./pie.svg";

class Datacard extends Component {
  state = {};

  render() {
    const color = () => {
      if (this.props.symbol === "1") {
        return "green";
      } else {
        return "red";
      }
    };
    const symbol = () => {
      if (this.props.symbol === "1") {
        return <FiTrendingUp color="green" transform="scale(1.2)" />;
      } else {
        return <FiTrendingDown color="red" transform="scale(1.2)" />;
      }
    };
    return (
      <div className="data-card">
        <div className="data-card-padder">
          <div className="data-card-name">
            <div className="data-card-name-value">{this.props.name}</div>
            <div className="data-card-options">
              <FiMoreHorizontal color="white" />
            </div>
          </div>
          <div className="data-card-data">
            <div className="data-card-number">
              <div className="data-card-number-value">{this.props.number}</div>
              <div className="data-card-number-change">
                <div className="data-card-number-change-symbol">{symbol()}</div>
                <div
                  className="data-card-number-change-value"
                  style={{ color: color() }}
                >
                  {this.props.change}
                </div>
              </div>
            </div>
            <div className="data-card-graph">
              <img src={donut} alt="not here" className="donut-svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Datacard;
