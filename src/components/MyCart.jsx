import React from "react";
import illustrationEmptyCart from "../../public/assets/images/illustration-empty-cart.svg";
import iconCarbonNeutral from "../../public/assets/images/icon-carbon-neutral.svg";
import SelectedCartItemAtom from "../atoms/SelectedCartItemAtom";

const MyCart = () => {
  return (
    <div className="px-6 py-[1.625rem] w-full rounded-lg bg-white">
      <h2 className="text-red text-xl font-bold">Your Cart (0)</h2>

      {/* No cart items (Empty state) */}
      {/* <figure className="mt-5 pb-[2.6875rem]">
        <img
          src={illustrationEmptyCart}
          alt="empty cart"
          className="h-auto mx-auto"
        />
        <figcaption className="text-center text-rose-400 mt-4 font-semibold">
          Your added items will appear here
        </figcaption>
      </figure> */}

      {/* selected cart item  */}
      <div className="mt-8 space-y-[1.125rem]">
        <SelectedCartItemAtom />
        <SelectedCartItemAtom />
        <SelectedCartItemAtom />
      </div>

      {/* Total Price */}
      <div className="flex justify-between items-center my-8">
        <p className="text-[#52525b] font-semibold">Order Total</p>
        <p className="text-2xl font-bold">$46.50</p>
      </div>

      {/* carbon-neutral delivery */}
      <div className="bg-rose-100 py-4 rounded-lg flex items-center justify-center gap-x-2 lg:max-xl:gap-x-1">
        <img src={iconCarbonNeutral} alt="carbon neutral" />
        <p className="text-[#52525b] text-base font-semibold text-nowrap lg:max-[1312px]:text-[13px]">
          This is a <span className="!text-[#000000]">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      {/* confirm order button */}
      <button className="text-white bg-red py-4 mt-6 rounded-full w-full capitalize">
        confirm order
      </button>
    </div>
  );
};

export default MyCart;
