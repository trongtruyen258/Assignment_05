export default function ProductCategoryRows(props) {
  return (
    <tr key={props.category.id}>
      <th colSpan={"2"}>{props.category.name}</th>
    </tr>
  );
}
