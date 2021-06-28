import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Headline } from "../common/Headline/Headline";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { Button } from "../common/Button/Button";
import { CartProducts } from "./components/CartProducts";

interface CartPopUpProps {
  device: "mobile" | "desktop";
}

export const CartPopUp: React.FC<CartPopUpProps> = ({ device }) => {
  const { cart, setCart } = useContext(CartContext);

  const rootClass = "cart-pop-up";

  const handleRemoveAll = () => setCart([]);

  return (
    <Wrapper className={`${rootClass} ${rootClass}__${device}`}>
      <div>
        <div className={`${rootClass}__header`}>
          <Headline level="h5" text={`CART (${cart.length})`} theme="dark" />
          <button className="btn" onClick={handleRemoveAll}>
            Remove all
          </button>
        </div>
        <div className={`${rootClass}__body`}>
          <CartProducts />
        </div>
        <div className={`${rootClass}__footer`}>
          <Button text="CHECKOUT" isFullWidth />
        </div>
      </div>
    </Wrapper>
  );
};
