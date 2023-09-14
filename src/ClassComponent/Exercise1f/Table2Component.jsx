import React from "react";

export default class Table2Component extends React.Component {
  constructor(props) {
    super(props);
    this.tableData = [
      { id: 1, name: "sp2017", total: 20 },
      { id: 2, name: "sp2016", total: 20 },
      { id: 3, name: "sp2015", total: 20 },
    ];
  }
  tableHead = () => {
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
            Mã
          </th>
          <th
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            Sản phẩm
          </th>
          <th
            style={{
              background: "#fff",
              padding: "5px",
              border: "3px solid gray",
            }}
          >
            Số lượng
          </th>
        </tr>
      </thead>
    );
  };
  tableBody = () => {
    return (
      <>
        {this.tableData.map((ele) => {
          return (
            <tr key={ele.id}>
              <td
                style={{
                  background: "#fff",
                  padding: "5px",
                  border: "3px solid gray",
                }}
              >
                SanPham{ele.id}
              </td>
              <td
                style={{
                  background: "#fff",
                  padding: "5px",
                  border: "3px solid gray",
                }}
              >
                {ele.name}
              </td>
              <td
                style={{
                  background: "#fff",
                  padding: "5px",
                  border: "3px solid gray",
                }}
              >
                {ele.total}
              </td>
            </tr>
          );
        })}
      </>
    );
  };
  render() {
    return (
      <table style={{ background: "gray", textAlign: "center" }}>
        {this.tableHead()}
        <tbody>{this.tableBody()}</tbody>
      </table>
    );
  }
}
