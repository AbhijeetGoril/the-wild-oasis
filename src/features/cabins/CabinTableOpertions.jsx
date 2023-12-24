import TableOpertions from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOpertions() {
  return (
    <TableOpertions>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name(A-Z)" },
          { value: "name-desc", label: "Sort By Name(Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price(low first)" },
          { value: "regularPrice-desc", label: "Sort by price(high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity(low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity(high first)" },
        ]}
      />
    </TableOpertions>
  );
}

export default CabinTableOpertions;
