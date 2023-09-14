import ProductTable from "./ProductTable";
import SearchComponent from "./SearchComponent";

export default function FilterableProductTable() {
  return (
    <div>
      <SearchComponent />
      <div>
        <ProductTable />
      </div>
    </div>
  );
}
