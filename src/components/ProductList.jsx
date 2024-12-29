import { products } from "../constants";
import CartItem from "../atoms/CartItem";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product, index) => (
        <CartItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
