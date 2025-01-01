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
        // Determine the quantity of the item selected
        const quantity = cartItem ? cartItem.quantity : 0;
        // Return the CartItem component for each product
        return (
          <CartItem
            key={index}
            {...product}
            isSelected={isSelected}
            quantity={quantity}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
