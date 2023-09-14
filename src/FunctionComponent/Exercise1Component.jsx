import React from "react";

function Exercise1Component() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Word"),
    React.createElement("p", null, "My first Paragraph")
  );
}
export default Exercise1Component;
