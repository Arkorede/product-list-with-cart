import { useState } from "react";
import illustrationEmptyCart from "../assets/images/illustration-empty-cart.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import iconOrderConfirmed from "../assets/images/icon-order-confirmed.svg";
import SelectedCartItem from "../subcomponents/SelectedCartItem";
import { useCart } from "../context/CartContext";
import Modal from "./Modal";
import ModalSelectedCartItem from "../subcomponents/ModalSelectedCartItem";
import { PaystackButton } from "react-paystack";

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

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const resetForm = () =>
    setValue({
      name: "",
      email: "",
      phone: "",
    });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const { name, email, phone } = value;

  // converting to Kobo
  const amount = totalPrice * 100;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "pay now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!"), resetForm();
    },
    onClose: () => alert("Wait! You need to eat, don't go!!!!"),
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
                return <SelectedCartItem key={index} {...cartItem} />;
              })}
            </div>

            {/* Total Price */}
            <div className="flex items-center justify-between my-8">
              <p className="text-[#52525b] font-semibold">Order Total</p>
              <p className="text-2xl font-bold text-rose-900">₦{totalPrice}</p>
            </div>

            {/* carbon-neutral delivery */}
            <div className="flex items-center justify-center py-4 rounded-lg bg-rose-100 gap-x-1.5 lg:max-xl:gap-x-1">
              <img src={iconCarbonNeutral} alt="carbon neutral" />
              <p className="text-[#52525b] text-sm font-semibold text-nowrap lg:max-[1312px]:text-[13px]">
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
          <div className="flex flex-col min-[800px]:flex-row w-full gap-x-8">
            {/* List of Ordered Items */}
            <div className="w-full min-[800px]:w-1/2">
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
                  return <ModalSelectedCartItem key={index} {...cartItem} />;
                })}
                {/* Total Price */}
                <div className="flex items-center justify-between pt-8 pb-7">
                  <p className="text-[#52525b] font-semibold">Order Total</p>
                  <p className="text-2xl font-bold text-rose-900">
                    ₦{totalPrice}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="w-full flex items-center min-[800px]:w-1/2">
              <div className="pt-[68px] flex flex-col w-full h-full gap-y-8">
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase text-rose-900"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="pl-2 bg-transparent rounded-[5px] w-full h-[45px] outline-none border border-black"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase text-rose-900"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="pl-2 bg-transparent rounded-[5px] w-full h-[45px] outline-none border border-black"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase text-rose-900"
                  >
                    phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="pl-2 bg-transparent rounded-[5px] w-full h-[45px] outline-none border border-black"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>

                <PaystackButton
                  {...componentProps}
                  className="w-full py-3 mt-[20px] text-sm text-white capitalize rounded-full bg-red hover:bg-[#9a3412]"
                  onClick={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MyCart;
