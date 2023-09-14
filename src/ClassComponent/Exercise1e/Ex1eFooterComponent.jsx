import React from "react";

export default class Ex1eFooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "5/1/6/3",
      background: "yellow",
      height: "110px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
