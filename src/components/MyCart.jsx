import React from "react";
import illustrationEmptyCart from "../../public/assets/images/illustration-empty-cart.svg";

const MyCart = () => {
  return (
    <div className="px-6 pt-[26px] pb-[43px] w-full rounded-lg bg-white">
      <h2 className="text-red text-xl font-bold">Your Cart (0)</h2>
      <figure className="mt-5">
        <img
          src={illustrationEmptyCart}
          alt="empty cart"
          className="h-auto mx-auto"
        />
        <figcaption className="text-center text-rose-400 mt-4 font-semibold">
          Your added items will appear here
        </figcaption>
      </figure>
    </div>
  );
};

export default MyCart;
