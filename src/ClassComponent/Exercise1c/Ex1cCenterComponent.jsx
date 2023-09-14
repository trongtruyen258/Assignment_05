import React from "react";

export default class Ex1cCenterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.path =
      "https://vtiacademy.edu.vn/upload/images/lo-trinh-front-end-1.png";
    this.title =
      "Lộ trình Front End: Hướng dẫn chi tiết để trở thành một Front End Developer";
    this.content =
      "Bạn muốn chinh phục vị trí lập trình viên Front End? Bạn muốn tạo ra những trải nghiệm người dùng thật mượt mà? Vậy hãy cùng khám phá Lộ trình Front End và tìm hiểu cách trở thành một Developer Front End qua bài viết dưới đây của VTI Academy nhé!";
  }
  render() {
    return (
      <div style={{ padding: "10px" }}>
        <section>
          <div>
            <img src={this.path} alt="hinh anh" style={{ width: "100%" }} />
          </div>
          <div>
            <h4>{this.title}</h4>
            <p>{this.content}</p>
          </div>
        </section>
      </div>
    );
  }
}
