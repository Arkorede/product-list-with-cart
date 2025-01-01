import { products } from "../constants";
import CartItem from "../atoms/CartItem";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { cartItems } = useCart();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product, index) => {
        // Find the corresponding item in the cartItems array
        const cartItem = cartItems.find((item) => item.name === product.name);
        // Determine if the item is selected
        const isSelected = cartItem ? cartItem.isSelected : false;
        // Return the CartItem component for each product
        return <CartItem key={index} {...product} isSelected={isSelected} />;
      })}
    </div>
  );
};

export default ProductList;
