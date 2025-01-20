import iconAddToCart from "../assets/images/icon-add-to-cart.svg";
import iconIncrementQuantity from "../assets/images/icon-increment-quantity.svg";
import iconDecrementQuantity from "../assets/images/icon-decrement-quantity.svg";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

const CartItemAtom = (props) => {
  const { image, name, category, price, isSelected, quantity } = props;
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } =
    useCart();

  const handleAddToCart = () => {
    addToCart(props);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(props.name);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(props.name);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="w-full">
      {/* image with button container */}
      <div
        className={`relative w-full ₦{
          isSelected ? "border-2 border-red rounded-lg" : ""
        }`}
      >
        <picture className="">
          <source srcSet={image.mobile} media="(min-width: 375px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <source srcSet={image.desktop} media="(min-width: 769px)" />
          <img
            src={image.thumbnail}
            alt="cart item"
            className="w-full h-[273px] rounded-lg"
          />
        </picture>
        <div className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2">
          {isSelected ? (
            // increment and decrement buttons
            <div className="flex items-center justify-between px-3 py-2.5 bg-red rounded-full w-[9.8125rem] xl:w-[10.875rem]">
              <button
                className="w-5 h-5 p-1 border border-white rounded-full"
                onClick={handleDecreaseQuantity}
              >
                <img src={iconDecrementQuantity} alt="decrease quantity" />
              </button>
              <p className="text-base font-semibold text-white">{quantity}</p>
              <button
                className="w-5 h-5 p-1 border border-white rounded-full"
                onClick={handleIncreaseQuantity}
              >
                <img src={iconIncrementQuantity} alt="increase quantity" />
              </button>
            </div>
          ) : (
            // add to cart button
            <button
              className="flex gap-x-2.5 items-center justify-center px-[1.8125rem] py-1.5 xl:px-[2.3125rem] xl:py-2 border border-rose-400 rounded-full bg-white hover:border-red hover:text-red"
              onClick={handleAddToCart}
            >
              <img src={iconAddToCart} alt="add to cart" />
              <p className="text-sm font-semibold xl:text-base text-nowrap text-rose-900">
                Add to Cart
              </p>
            </button>
          )}
        </div>
      </div>

      {/* cart item details */}
      <div className="w-full mt-10 space-y-0.5">
        <p className="text-rose-400">{name}</p>
        <p className="text-lg font-semibold text-rose-900">{category}</p>
        <p className="text-lg font-semibold text-red">₦ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

CartItemAtom.propTypes = {
  image: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default CartItemAtom;
