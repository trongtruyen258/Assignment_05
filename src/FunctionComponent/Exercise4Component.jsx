export default function Exercise4Component() {
  function fullName(firstName, lastName) {
    const fName = firstName;
    const lName = lastName;
    return (
      <div>
        <h3>4a:</h3>
        <p>fName: {fName}</p>
        <p>lName: {lName}</p>
        <p>fullName: {fName + " " + lName}</p>
      </div>
    );
  }

  let exercise4a = fullName("Nguyen Van", "A");
  let user = {
    avatarUrl:
      "https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-avatar-nu-de-thuong.jpg",
    title: "Jo Blogger",
    content:
      "cute, cool ngầu, lạnh lùng, cá tính, đẹp nhất làm ảnh đại diện cho con gái, giúp thể hiện sự đáng yêu, nữ tính hay chất riêng. ",
  };
  let exercise4b = (
    <div>
      <h3>4b:</h3>
      <div
        style={{
          display: "flex",
          background: "gray",
          padding: "15px",
          width: "500px",
        }}
      >
        <div>
          <img
            src={user.avatarUrl}
            alt="avatar"
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          ></img>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h4>{user.title}</h4>
          <p>{user.content}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {exercise4a} {exercise4b}
    </div>
  );
}
