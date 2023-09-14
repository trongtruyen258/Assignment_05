import React from "react";

export default class Ex1eHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "1/1/2/3",
      background: "red",
      height: "110px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
