import PropTypes from "prop-types";

const ModalSelectedCartItemAtom = (props) => {
  const { name, price, quantity, image } = props;

  return (
    <>
      <div className="flex items-center justify-between border-b border-rose-300">
        <div className="flex py-5 gap-x-3">
          <img
            src={image.thumbnail}
            alt="item's image"
            className="w-[3.75rem] h-[3.75rem] rounded-sm"
          />
          <div className="flex flex-col max-w-[6.25rem] min-[420px]:max-w-[11.1875rem] space-y-3">
            <p className="font-semibold truncate sm:text-wrap text-rose-900">
              {name}
            </p>
            <div className="flex items-center justify-start">
              <p className="mr-5 font-semibold text-red">{quantity}x</p>
              <p className="mr-2 font-semibold text-rose-400">@ ₦{price}</p>
            </div>
          </div>
        </div>
        <p className="font-semibold text-rose-900">₦ {price * quantity}</p>
      </div>
    </>
  );
};

ModalSelectedCartItemAtom.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalSelectedCartItemAtom;
