import addToCart from "../../public/assets/images/icon-add-to-cart.svg";

const CartItem = (props) => {
  const { image, name, category, price } = props;

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
        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-x-2.5 items-center justify-center px-[1.8125rem] py-2.5 xl:px-[2.3125rem] xl:py-3 border border-rose-400 rounded-full bg-white">
          <img src={addToCart} alt="add to cart" />
          <p className="font-semibold text-nowrap text-base">Add to Cart</p>
        </button>
      </div>

      {/* cart item details */}
      <div className="w-full mt-10 space-y-0.5">
        <p className="text-rose-400">{name}</p>
        <p className="text-lg font-semibold">{category}</p>
        <p className="text-lg text-red font-semibold">$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
