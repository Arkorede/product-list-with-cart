import { useState } from "react";
import viteLogo from "/vite.svg";
import CartItem from "./atoms/CartItem";
import ProductList from "./components/ProductList";
import MyCart from "./components/MyCart";

function App() {
  return (
    <>
      <div className="px-[1.5625rem] py-6 sm:px-[30px] sm:py-7 md:px-[3.125rem] md:py-9 lg:px-[3.125rem] lg:py-12 xl:px-[6.6875rem] xl:py-[3.25rem] bg-rose-50 grid lg:grid-cols-12 gap-x-7 gap-y-10">
        <div className="w-full col-span-full lg:col-span-8">
          <header className="mb-10">
            <h1 className="text-2xl font-bold">Desserts</h1>
          </header>
          <ProductList />
        </div>
        <div className="col-span-full lg:col-span-4">
          <MyCart />
        </div>
      </div>
    </>
  );
}

export default App;
