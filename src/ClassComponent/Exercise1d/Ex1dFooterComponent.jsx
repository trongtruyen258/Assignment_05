import React from "react";

export default class Ex1dFooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "3/1/4/3",
      background: "black",
      height: "50px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
