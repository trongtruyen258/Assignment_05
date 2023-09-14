import React from "react";

export default class Ex1bComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = "Nguyen Van";
    this.lastName = "A";
    this.age = 25;
  }
  getFullName = () => {
    return this.firstName + " " + this.lastName;
  };
  render() {
    return (
      <div>
        <h1>Full name: {this.getFullName()}</h1>
        <p>Age: {this.age}</p>
      </div>
    );
  }
}
