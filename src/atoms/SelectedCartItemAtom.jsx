import removeItemIcon from "../assets/images/icon-remove-item.svg";

const SelectedCartItemAtom = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-rose-100">
        <div className="flex flex-col pb-6 space-y-3">
          <p className="font-bold">Classic Tiramisu</p>
          <div className="flex items-center justify-start">
            <p className="mr-5 font-semibold text-red">1x</p>
            <p className="mr-2 font-semibold text-rose-400">@ $5.5</p>
            <p className="font-bold text-rose-400">$ 5.50</p>
          </div>
        </div>
        <button className="p-1 border rounded-full border-rose-300 hover:filter hover:brightness-0">
          <img src={removeItemIcon} alt="remove item" className="" />
        </button>
      </div>
    </>
  );
};

export default SelectedCartItemAtom;
