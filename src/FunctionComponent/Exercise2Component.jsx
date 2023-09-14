export default function Exercise2Component() {
  let exercise2a = (
    <div>
      <h3>2a:</h3>
      <h1>Hello World</h1>
      <p>My first paragraph</p>
    </div>
  );
  let exercise2b = (
    <div>
      <h3>2b:</h3>
      <h2>DANH SÁCH LỚP HỌC</h2>
      <ol>
        <li>Nguyễn Ngọc Duy</li>
        <li>Tống Quang Anh</li>
        <li>Đinh Thu Loan</li>
        <li>Hà Văn Tiến</li>
        <li>Nguyễn Hải Đăng</li>
        <li>Nguyễn Tiến Quang</li>
        <li>Nguyễn Văn Chiến</li>
      </ol>
      <ol>
        <li>
          Cơm trưa
          <ul>
            <li>Cơm chiên hải sản</li>
            <li>Cơm sườn non nấu cam</li>
            <li>Cơm anh chua cá lóc</li>
          </ul>
        </li>
        <li>
          Tráng miệng trái cây
          <ul>
            <li>Nho</li>
            <li>Chuối</li>
            <li>Mận</li>
          </ul>
        </li>
      </ol>
    </div>
  );
  let exercise2c = (
    <div>
      <h3>2c:</h3>
      <div onClick={handleClick}>Hello World</div>
    </div>
  );
  return (
    <div>
      {exercise2a}
      {exercise2b}
      {exercise2c}
    </div>
  );
}
function handleClick() {
  console.log("Hello");
}
