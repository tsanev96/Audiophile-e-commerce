import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Headline } from "../common/Headline/Headline";
import { Image } from "../common/Image/Image";
import { Wrapper } from "../common/Wrapper/Wrapper";
import { categoryEarphonesImages } from "../../util/imageExports/category-earphones";
import { ProductActionButtons } from "../common/ProductActionButtons/ProductActionButtons";
import { Copy } from "../common/Copy/Copy";
import { Button } from "../common/Button/Button";

export const CartPopUp: React.FC = () => {
  const { cart, setCart } = useContext(CartContext);

  const rootClass = "cart-pop-up";

  const handleRemoveAll = () => setCart([]);

  return (
    <Wrapper className={rootClass}>
      <div>
        <div className={`${rootClass}__header`}>
          <Headline level="h5" text={`CART (${cart.length})`} theme="dark" />
          <button className="btn" onClick={handleRemoveAll}>
            Remove all
          </button>
        </div>
        <div className={`${rootClass}__body`}>
          {cart.map((product) => (
            <div key={product.id} className="product-info">
              <Image
                mobile={categoryEarphonesImages.mobile}
                tablet={categoryEarphonesImages.mobile}
                desktop={categoryEarphonesImages.mobile}
                alt=""
              />
              <div className="info">
                <Copy text={product.name} theme="dark" />
                <Copy text={`$${product.total}`} theme="dark" />
              </div>
              <ProductActionButtons
                product={product}
                quantity={product.quantity}
                onQuantityChange={() => {}}
              />
            </div>
          ))}
        </div>
        <div className={`${rootClass}__footer`}>
          <Button text="CHECKOUT" isFullWidth />
        </div>
      </div>
    </Wrapper>
  );
};
