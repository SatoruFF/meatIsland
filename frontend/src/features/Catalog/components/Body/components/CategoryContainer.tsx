import { useParams } from "react-router-dom";

import ProductItem from "./ProductItem";

const CategoryContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Category ID: {id}</h1>
      <ProductItem />
    </div>
  );
};
export default CategoryContainer;
