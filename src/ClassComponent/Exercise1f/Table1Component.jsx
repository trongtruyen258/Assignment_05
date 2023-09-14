import React from "react";

export default class Table1Component extends React.Component {
  constructor(props) {
    super(props);
    this.tableData = [
      { id: 1, lang: "PHP", frame: "Laravel" },
      { id: 2, lang: "Android", frame: "Webkit" },
      { id: 3, lang: "Java", frame: "Meteor" },
    ];
  }
  TableHead = () => {
    return (
      <thead>
        <tr>
          <th
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            No
          </th>
          <th
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            Language
          </th>
          <th
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            Framework
          </th>
        </tr>
      </thead>
    );
  };
  TableBody = () => {
    return this.tableData.map((ele) => {
      return (
        <tr key={ele.id}>
          <td
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            {ele.id}
          </td>
          <td
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            {ele.lang}
          </td>
          <td
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            {ele.frame}
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table style={{ background: "gray", textAlign: "center" }}>
        {this.TableHead()}
        <tbody>{this.TableBody()}</tbody>
      </table>
    );
  }
}
