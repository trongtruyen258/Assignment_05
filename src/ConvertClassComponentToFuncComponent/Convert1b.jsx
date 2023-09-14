export default function Convert1b() {
  const firstName = "Nguyen Van";
  const lastName = "A";
  const age = 25;
  const getFullName = () => {
    return firstName + " " + lastName;
  };
  return (
    <div>
      <h1>Full name: {getFullName()}</h1>
      <p>Age: {age}</p>
    </div>
  );
}
