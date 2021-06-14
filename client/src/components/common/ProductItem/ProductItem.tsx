import { FC } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Category } from "../../../types/categories";
import { ImageDetails } from "../../../types/imageDetails";
import { scrollToTop } from "../../../util/scrollToTop";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";

interface ProductItemProps {
  id: string;
  isProductNew: boolean;
  headline: string;
  description: string;
  image: ImageDetails;
  button: {
    text?: string;
  };
  category: Category;
}

export const ProductItem: FC<ProductItemProps> = ({
  id,
  isProductNew,
  headline,
  description,
  image,
  button,
  category,
}) => {
  const rootWrapper = "product-item";

  const location = useLocation();
  const history = useHistory();

  const handleSeeProduct = () => {
    scrollToTop();
    history.push(`${location.pathname}/${id}`);
  };

  return (
    <div className={rootWrapper}>
      <div className={`${rootWrapper}__image-container`}>
        <Image
          mobile={image.mobile}
          tablet={image.tablet}
          desktop={image.tablet}
          alt={image.alt}
        />
      </div>
      <div className={`${rootWrapper}__content`}>
        {isProductNew && (
          <Copy theme="dark" className="new-product" text="NEW PRODUCT" />
        )}
        <Headline theme="dark" level="h2" text={headline} />
        <Copy theme="dark" className="description" text={description} />
        <Link to={`/${category}/${id}`}>
          <Button
            text={button.text ? button.text : "SEE PRODUCT"}
            onClick={handleSeeProduct}
          />
        </Link>
      </div>
    </div>
  );
};
