import { useState } from "react";
import viteLogo from "/vite.svg";
import CartItem from "./atoms/CartItem";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-[3.25rem]">
        <header className="mb-10">
          <h1 className="text-2xl font-bold">Desserts</h1>
        </header>
        <ProductList />
      </div>
    </>
  );
}

export default App;
