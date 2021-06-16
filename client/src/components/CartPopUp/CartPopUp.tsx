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
  const { cart } = useContext(CartContext);

  const rootClass = "cart-pop-up";

  return (
    <Wrapper className={rootClass}>
      <div>
        <div className={`${rootClass}__header`}>
          <Headline level="h5" text={`CART (${cart.length})`} theme="dark" />
          <button className="btn">Remove all</button>
        </div>
        <div className={`${rootClass}__body`}>
          {cart.map((product) => (
            <div className="product-info">
              <Image
                mobile={categoryEarphonesImages.mobile}
                tablet={categoryEarphonesImages.mobile}
                desktop={categoryEarphonesImages.mobile}
                alt=""
              />
              <div className="info">
                <Copy text={product.name} theme="dark" />
                <Copy text={`$${product.price}`} theme="dark" />
              </div>
              <ProductActionButtons
                product={product}
                state={{ quantity: product.quantity, price: product.price }}
                onHandleAddToCart={() => {}}
                dispatch={() => {}}
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
