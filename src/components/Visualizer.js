import React, { Component } from "react";
import Chart from "./Chart";
import "./visualizer.css";
import * as Sort from "../algo/Sort";
export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.BubbleSort = this.BubbleSort.bind(this);
    this.resetData = this.resetData.bind(this);
  }
  // prepare data
  resetData() {
    const data = [];
    for (let i = 0; i < 140; i++) {
      data.push(Math.floor(Math.random() * 550));
    }
    this.setState({ data });
  }
  componentDidMount() {
    this.resetData();
  }

  changeColor(i, j) {
    const temp = j;
    j = i;
    i = temp;
    return [i, j];
  }
  BubbleSort(e) {
    let data = this.state.data;
    const animation = Sort.BubbleSort(data);
    const divBars = document.getElementsByClassName("Bar");
    for (let i = 0; i < animation.pos1.length; i++) {
      const [pos1, pos2] = [animation.pos1[i], animation.pos2[i]];
      const div1BarStyle = divBars[pos1].style;
      const div2BarStyle = divBars[pos2].style;

      setTimeout(() => {
        [div1BarStyle.height, div2BarStyle.height] = [
          div2BarStyle.height,
          div1BarStyle.height,
        ];
        div1BarStyle.backgroundColor = "red";
        div2BarStyle.backgroundColor = "red";
      }, i * 1);

      setTimeout(() => {
        div1BarStyle.backgroundColor = "cyan";
        div2BarStyle.backgroundColor = "cyan";
        if (i === animation.pos1.length - 1) {
          this.setState({ data });
        }
      }, (i + 1) * 1);
    }
  }
  render() {
    const { data } = this.state;

    return (
      <div className="">
        <h1>Sorting Visualization</h1>
        <Chart data={data} />
        <div className="buttons">
          <button
            className="btn btn-primary text-nowrap"
            onClick={this.BubbleSort}
          >
            Bubble Sort
          </button>
          <button className="btn btn-success" onClick={this.resetData}>
            New Data
          </button>
        </div>
      </div>
    );
  }
}
