import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes";
import { CartContext } from "./context/cartContext";
import "./styles/main.scss";
import { CartProduct } from "./types/cartProduct";

const App = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes />
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
