import React from "react";
import { Boxes } from "../common/Boxes/Boxes";
import { ProductBox } from "../common/ProductBox/ProductBox";
import { boxesData } from "../Home/homeData";

export const CategoriesBoxes = () => {
  return (
    <Boxes>
      {boxesData.map((box) => (
        <ProductBox
          key={box.linkTo}
          buttonText="SHOP"
          headline={box.headline}
          theme="dark"
          linkTo={box.linkTo}
        />
      ))}
    </Boxes>
  );
};
