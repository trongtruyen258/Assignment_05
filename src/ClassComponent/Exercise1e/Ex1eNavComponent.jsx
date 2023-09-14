import React from "react";

export default class Ex1eNavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "2/1/3/3",
      background: "green",
      height: "40px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
