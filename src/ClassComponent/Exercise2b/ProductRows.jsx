export default function ProductRows(props) {
  return props.products.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>${product.price}</td>
      </tr>
    );
  });
}
