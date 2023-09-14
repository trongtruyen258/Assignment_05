import React from "react";

export default class Ex1dContentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "2/2/3/3",
      background: "gray",
      height: "600px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
