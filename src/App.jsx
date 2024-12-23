import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CartItem from "./components/CartItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-[3.25rem]">
        <header className="mb-10">
          <h1 className="text-2xl font-bold">Desserts</h1>
        </header>
        <div className="grid grid-cols-3">
          <CartItem />
        </div>
      </div>
    </>
  );
}

export default App;
