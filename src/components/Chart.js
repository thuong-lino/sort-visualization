import React, { Component } from "react";
import Bar from "./Bar";

export default class Chart extends Component {
  render() {
    const { data } = this.props;
    if (data) {
      return (
        <div className="Chart">
          {data.map((h, index) => (
            <Bar
              key={index}
              height={`${(h + 16) * 1.2}px`}
              width="5px"
              value={h}
            />
          ))}
        </div>
      );
    } else {
      return <h2>have nothing</h2>;
    }
  }
}
