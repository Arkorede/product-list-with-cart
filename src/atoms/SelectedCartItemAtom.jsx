import React from "react";
import removeItemIcon from "../../public/assets/images/icon-remove-item.svg";

const SelectedCartItemAtom = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-rose-100">
        <div className="flex flex-col space-y-3 pb-6">
          <p className="font-bold">Classic Tiramisu</p>
          <div className="flex justify-start items-center">
            <p className="text-red font-semibold mr-5">1x</p>
            <p className="mr-2">@ $5.5</p>
            <p className="">$ 5.50</p>
          </div>
        </div>
        <button className="border border-rose-300 rounded-full p-1">
          <img src={removeItemIcon} alt="remove item" />
        </button>
      </div>
    </>
  );
};

export default SelectedCartItemAtom;
