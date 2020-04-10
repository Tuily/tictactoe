import React, { Component } from "react";
import "./styles.css";

export default class Square extends Component {
  setColor = () => {
    if (!this.props.value) {
      return;
    }
    return this.props.value.toLowerCase();
  };

  render() {
    return (
      <button
        className={["square", this.setColor()].join(" ")}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
