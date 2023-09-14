import React from "react";

export default class Ex1eArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: "4/1/5/2",
      background: "black",
      height: "200px",
    };
  }
  render() {
    return <div style={this.style}></div>;
  }
}
