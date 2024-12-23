import { MdAddShoppingCart } from "react-icons/md";

const CartItem = () => {
  return (
    <div className="w-full">
      {/* image with button container */}
      <div className="relative w-full">
        <img
          src="https://picsum.photos/200/300"
          className="w-full h-auto rounded-lg"
          alt="cart item"
        />
        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-x-2.5 items-center justify-center px-9 py-3.5 border border-rose-400 rounded-full bg-white">
          <MdAddShoppingCart className="text-[24px] text-red" />
          <p className="font-semibold">Add to Cart</p>
        </button>
      </div>

      {/* cart item details */}
      <div className="w-full mt-10 space-y-0.5">
        <p className="text-rose-400">Waffke</p>
        <p className="text-lg font-semibold">Waffle with berries</p>
        <p className="text-lg text-red font-semibold">$ 6.50</p>
      </div>
    </div>
  );
};

export default CartItem;
