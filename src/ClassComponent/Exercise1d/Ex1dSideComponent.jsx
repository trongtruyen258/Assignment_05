import React from "react";

export default class Ex1dSideComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "2/1/3/2",
      background: "red",
      height: "600px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
