import React from "react";

export default class Ex1eSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "3/1/4/2",
      background: "blue",
      height: "200px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
