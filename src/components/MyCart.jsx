import { useState } from "react";
import illustrationEmptyCart from "../assets/images/illustration-empty-cart.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import iconOrderConfirmed from "../assets/images/icon-order-confirmed.svg";
import SelectedCartItemAtom from "../atoms/SelectedCartItemAtom";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";
import ModalSelectedCartItemAtom from "../atoms/ModalSelectedCartItemAtom";

const MyCart = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    clearCart();
    setIsModalOpen(false);
  };

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
              <p className="text-2xl font-bold">${totalPrice}</p>
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
            <button
              className="w-full py-4 mt-6 text-white capitalize rounded-full bg-red hover:bg-[#9a3412]"
              onClick={handleConfirmOrder}
            >
              confirm order
            </button>
          </div>
        )}
      </div>

      {/* Confirm Order Modal */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <img src={iconOrderConfirmed} alt="check" />
          <h1 className="mt-4 mb-1.5 text-2xl font-bold text-rose-900">
            <span className="block sm:inline-block">Order</span>{" "}
            <span className="block sm:inline-block"> Confirmed</span>
          </h1>
          <p className="text-sm capitalize text-rose-400">
            we hope you enjoy your food!
          </p>
          <div className="pt-1 rounded-lg mt-7 px-7 bg-rose-50">
            {cartItems.map((cartItem, index) => {
              return <ModalSelectedCartItemAtom key={index} {...cartItem} />;
            })}
            {/* Total Price */}
            <div className="flex items-center justify-between pt-8 pb-7">
              <p className="text-[#52525b] font-semibold">Order Total</p>
              <p className="text-2xl font-bold">${totalPrice}</p>
            </div>
          </div>
          <button
            className="w-full py-4 mt-7 text-white capitalize rounded-full bg-red hover:bg-[#9a3412]"
            onClick={handleCloseModal}
          >
            start new order
          </button>
        </Modal>
      )}
    </div>
  );
};

export default MyCart;
