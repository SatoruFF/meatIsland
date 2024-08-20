import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

const CategoryContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <ProductItem />
    </div>
  );
};
export default CategoryContainer;
