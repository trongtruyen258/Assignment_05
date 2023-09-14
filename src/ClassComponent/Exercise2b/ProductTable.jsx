import { listCategory, listProduct } from "./DataComponent";
import ProductCategoryRows from "./ProductCategoryRows";
import ProductRows from "./ProductRows";

export default function ProductTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {listCategory.map((category) => {
        return (
          <tbody>
            <ProductCategoryRows category={category} />
            <ProductRows
              products={listProduct.filter((product) => {
                return product.categoryId === category.id;
              })}
            />
          </tbody>
        );
      })}
      {/* <ProductCategoryRows category={listCategory[0]} />
        <ProductRows
          products={listProduct.filter((product) => {
            return product.categoryId === listCategory[0].id;
          })}
        />
        <ProductCategoryRows category={listCategory[1]} />
        <ProductRows
          products={listProduct.filter((product) => {
            return product.categoryId === listCategory[1].id;
          })}
        /> */}
    </table>
  );
}
