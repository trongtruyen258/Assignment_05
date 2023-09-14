import React from "react";

export default class Ex1eAsideComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "3/2/5/3",
      background: "gray",
      height: "400px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
