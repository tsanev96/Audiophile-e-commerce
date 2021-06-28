import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { useCart } from "../../../hooks/cart";
import { Copy } from "../../common/Copy/Copy";
import { ProductCartActions } from "./ProductCartActions";
import { Image } from "../../common/Image/Image";
import { categoryEarphonesImages } from "../../../util/imageExports/category-earphones";

export const CartProducts = () => {
  const { cart } = useContext(CartContext);
  const addProductToCart = useCart();

  return (
    <>
      {cart.map((product) => (
        <div key={product.id} className="product-info">
          <Image
            mobile={categoryEarphonesImages.mobile}
            tablet={categoryEarphonesImages.mobile}
            desktop={categoryEarphonesImages.mobile}
            alt="mock image"
          />
          <div className="info">
            <Copy text={product.name} theme="dark" />
            <Copy text={`$${product.total}`} theme="dark" />
          </div>
          <ProductCartActions
            product={product}
            onCartChange={addProductToCart}
          />
        </div>
      ))}
    </>
  );
};
