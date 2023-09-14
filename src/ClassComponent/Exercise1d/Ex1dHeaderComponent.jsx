import React from "react";

export default class Ex1dHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "1/1/2/3",
      background: "yellow",
      height: "100px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
