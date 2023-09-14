import React from "react";

export default class Ex1cLeftComponent extends React.Component {
  constructor(props) {
    super(props);
    this.path =
      "https://vtiacademy.edu.vn/upload/images/lo-trinh-tro-thanh-web-developer.jpeg";
    this.title = "Lộ trình trở thành Web Developer cho người mới bắt đầu";
    this.content =
      "Bạn đang có mong muốn bắt đầu sự nghiệp với vai trò Web Developer mà chưa biết bắt đầu từ đâu? Hãy để VTI Academy gợi ý cho bạn lộ trình trở thành Web Developer cùng một số kiến thức cơ bản về nghề này nhé!";
  }
  render() {
    return (
      <div style={{ padding: "10px" }}>
        <section>
          <div>
            <img src={this.path} alt="hinh anh" style={{ width: "100%" }}></img>
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
