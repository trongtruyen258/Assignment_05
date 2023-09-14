import "./exercise3.css";
export default function Exercise3Component() {
  let exercise3a = (
    <div>
      <h3>3a:</h3>
      <div style={{ border: "1px solid red" }}>Hello World</div>
      <div className="exercise3-style1">Hello World</div>
      <div className="exercise3-style2">Hello World</div>
    </div>
  );
  let path =
    "https://vtiacademy.edu.vn/upload/images/anh-link/cau-hoi-phong-van-web-developer.jpeg";
  let exercise3b = (
    <div className="section-ex3">
      <h3>3b:</h3>
      <section>
        <h2>Học lập trình web có đơn giản không</h2>
        <img style={{ width: "300px" }} src={path} alt="hinh anh"></img>
        <p style={{ marginBottom: "0" }}>
          CORS hay Cross-Origin Resource Sharing là một cơ chế trình duyệt cho
          phép truy cập và kiểm soát các tài nguyên nằm bên ngoài một tên miền
          nhất định nào đó. CORS sinh ra vì chính sách same-origin liên quan đến
          bảo mật được cài đặt vào toàn bộ các trình duyệt hiện nay. Cụ thể là
          một website không thể truy cập và sử dụng các thông tin, tài nguyên
          của người dùng trên các website khác nếu không được phép.
        </p>
        <div>
          <button className="bnt-ex3">Đọc thêm</button>
        </div>
      </section>
    </div>
  );
  let exercise3c = (
    <div className="form-ex3">
      <form>
        <div>
          <h2>Login Form</h2>
        </div>
        <input
          className="input-ex3"
          type="text"
          placeholder="Email or Username"
          required
        ></input>
        <input
          className="input-ex3"
          placeholder="Password"
          type="password"
          required
        ></input>
        <input className="input-submit" type="submit" value={"Login"}></input>
        <p>Or Login with</p>
        <button className="bnt-login">Facebook</button>
        <button className="bnt-login">Google</button>
        <p>
          Not a member? <a href="#">Signup now</a>
        </p>
      </form>
    </div>
  );
  return (
    <div>
      {exercise3a}
      {exercise3b}
      {exercise3c}
    </div>
  );
}
