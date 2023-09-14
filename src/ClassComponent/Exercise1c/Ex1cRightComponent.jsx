import React from "react";

export default class Ex1cRightComponent extends React.Component {
  constructor(props) {
    super(props);
    this.path =
      "https://vtiacademy.edu.vn/upload/images/anh-link/cau-hoi-phong-van-web-developer.jpeg";
    this.title = "Câu hỏi phỏng vấn Web Developer thường gặp";
    this.content =
      "Phần trả lời phỏng vấn luôn chiếm vai trò quan trọng nhất trong quá trình tuyển dụng. Do đó, bạn cần có sự chuẩn bị kỹ lưỡng cho những câu hỏi thường gặp để trả lời một cách tự tin nhất. Trong bài viết này, VTI Academy sẽ giới thiệu cho bạn một số câu hỏi phỏng vấn Web Developer phổ biến cùng gợi ý trả lời nhé!";
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
