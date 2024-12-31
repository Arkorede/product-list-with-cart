import iconAddToCart from "../assets/images/icon-add-to-cart.svg";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

const CartItem = (props) => {
  const { image, name, category, price } = props;
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = () => {
    addToCart(props);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="w-full">
      {/* image with button container */}
      <div className="relative w-full">
        <picture className="">
          <source srcSet={image.mobile} media="(max-width: 375px)" />
          <source srcSet={image.tablet} media="(max-width: 768px)" />
          <source srcSet={image.desktop} media="(max-width: 769px)" />
          <img
            src={image.thumbnail}
            alt="cart item"
            className="w-full h-auto rounded-lg"
          />
        </picture>
        <button
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-x-2.5 items-center justify-center px-[1.8125rem] py-2.5 xl:px-[2.3125rem] xl:py-3 border border-rose-400 rounded-full bg-white hover:border-red hover:text-red"
          onClick={handleAddToCart}
        >
          <img src={iconAddToCart} alt="add to cart" />
          <p className="text-base font-semibold text-nowrap">Add to Cart</p>
        </button>
      </div>

      {/* cart item details */}
      <div className="w-full mt-10 space-y-0.5">
        <p className="text-rose-400">{name}</p>
        <p className="text-lg font-semibold">{category}</p>
        <p className="text-lg font-semibold text-red">$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  image: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
