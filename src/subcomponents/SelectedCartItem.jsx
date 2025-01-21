import removeItemIcon from "../assets/images/icon-remove-item.svg";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

const SelectedCartItem = (props) => {
  const { name, price, quantity } = props;
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(props.name);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-rose-100">
        <div className="flex flex-col pb-6 space-y-3">
          <p className="font-bold text-rose-900">{name}</p>
          <div className="flex items-center justify-start">
            <p className="mr-5 font-semibold text-red">{quantity}x</p>
            <p className="mr-2 font-semibold text-rose-400">@ ₦{price}</p>
            <p className="font-bold text-rose-400">₦ {price * quantity}</p>
          </div>
        </div>
        <button
          className="p-1 border rounded-full border-rose-300 hover:filter hover:brightness-0"
          onClick={handleRemoveFromCart}
        >
          <img src={removeItemIcon} alt="remove item" className="" />
        </button>
      </div>
    </>
  );
};

SelectedCartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default SelectedCartItem;
