import React, { Component } from "react";
import "./css/bar.css";
export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width, height } = this.props;
    const barStyle = {
      width: width,
      height: height,
    };
    return (
      <div className="Bar" style={barStyle}>
        {/* <span className="Value">{this.props.value}</span> */}
      </div>
    );
  }
}
