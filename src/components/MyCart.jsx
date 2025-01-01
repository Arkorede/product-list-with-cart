import illustrationEmptyCart from "../assets/images/illustration-empty-cart.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import SelectedCartItemAtom from "../atoms/SelectedCartItemAtom";
import { useCart } from "../context/CartContext";

const MyCart = () => {
  const { cartItems } = useCart();

  return (
    <div className="px-6 py-[1.625rem] w-full rounded-lg bg-white">
      <h2 className="text-xl font-bold text-red">
        Your Cart ({cartItems.length})
      </h2>

      <div className="w-full">
        {cartItems.length === 0 ? (
          //  No cart items (Empty state)
          <figure className="mt-5 pb-[2.6875rem]">
            <img
              src={illustrationEmptyCart}
              alt="empty cart"
              className="h-auto mx-auto"
            />
            <figcaption className="mt-4 font-semibold text-center text-rose-400">
              Your added items will appear here
            </figcaption>
          </figure>
        ) : (
          // selected cart items
          <div className="w-full">
            <div className="mt-8 space-y-[1.125rem]">
              {cartItems.map((cartItem, index) => {
                return <SelectedCartItemAtom key={index} {...cartItem} />;
              })}
            </div>

            {/* Total Price */}
            <div className="flex items-center justify-between my-8">
              <p className="text-[#52525b] font-semibold">Order Total</p>
              <p className="text-2xl font-bold">$46.50</p>
            </div>

            {/* carbon-neutral delivery */}
            <div className="flex items-center justify-center py-4 rounded-lg bg-rose-100 gap-x-2 lg:max-xl:gap-x-1">
              <img src={iconCarbonNeutral} alt="carbon neutral" />
              <p className="text-[#52525b] text-base font-semibold text-nowrap lg:max-[1312px]:text-[13px]">
                This is a{" "}
                <span className="!text-[#000000]">carbon-neutral</span> delivery
              </p>
            </div>

            {/* confirm order button */}
            <button className="w-full py-4 mt-6 text-white capitalize rounded-full bg-red hover:bg-[#9a3412]">
              confirm order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
