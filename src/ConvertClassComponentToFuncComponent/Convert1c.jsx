export default function Convert1c() {
  const leftComponent = () => {
    const imgUrl =
      "https://vtiacademy.edu.vn/upload/images/lo-trinh-tro-thanh-web-developer.jpeg";
    return (
      <div style={{ padding: "10px" }}>
        <section>
          <div>
            <img src={imgUrl} alt="hinh anh" style={{ width: "100%" }}></img>
          </div>
          <div>
            <h4>Lộ trình trở thành Web Developer cho người mới bắt đầu</h4>
            <p>
              Bạn đang có mong muốn bắt đầu sự nghiệp với vai trò Web Developer
              mà chưa biết bắt đầu từ đâu? Hãy để VTI Academy gợi ý cho bạn lộ
              trình trở thành Web Developer cùng một số kiến thức cơ bản về nghề
              này nhé!
            </p>
          </div>
        </section>
      </div>
    );
  };
  const centerComponent = () => {
    const imgUrl =
      "https://vtiacademy.edu.vn/upload/images/lo-trinh-front-end-1.png";
    return (
      <div style={{ padding: "10px" }}>
        <section>
          <div>
            <img src={imgUrl} alt="hinh anh" style={{ width: "100%" }}></img>
          </div>
          <div>
            <h4>
              Lộ trình Front End: Hướng dẫn chi tiết để trở thành một Front End
              Developer
            </h4>
            <p>
              Bạn muốn chinh phục vị trí lập trình viên Front End? Bạn muốn tạo
              ra những trải nghiệm người dùng thật mượt mà? Vậy hãy cùng khám
              phá Lộ trình Front End và tìm hiểu cách trở thành một Developer
              Front End qua bài viết dưới đây của VTI Academy nhé!
            </p>
          </div>
        </section>
      </div>
    );
  };
  const rightComponent = () => {
    const imgUrl =
      "https://vtiacademy.edu.vn/upload/images/anh-link/cau-hoi-phong-van-web-developer.jpeg";
    return (
      <div style={{ padding: "10px" }}>
        <section>
          <div>
            <img src={imgUrl} alt="hinh anh" style={{ width: "100%" }}></img>
          </div>
          <div>
            <h4>Câu hỏi phỏng vấn Web Developer thường gặp</h4>
            <p>
              Phần trả lời phỏng vấn luôn chiếm vai trò quan trọng nhất trong
              quá trình tuyển dụng. Do đó, bạn cần có sự chuẩn bị kỹ lưỡng cho
              những câu hỏi thường gặp để trả lời một cách tự tin nhất. Trong
              bài viết này, VTI Academy sẽ giới thiệu cho bạn một số câu hỏi
              phỏng vấn Web Developer phổ biến cùng gợi ý trả lời nhé!
            </p>
          </div>
        </section>
      </div>
    );
  };
  return (
    <div style={{ display: "flex" }}>
      {leftComponent()}
      {centerComponent()}
      {rightComponent()}
    </div>
  );
}
