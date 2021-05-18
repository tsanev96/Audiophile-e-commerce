import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";

export const Image: FC<ImageDetails> = ({ mobile, tablet, desktop, alt }) => {
  const rootWrapper = "image";

  return (
    <div className={rootWrapper}>
      <img className={`${rootWrapper}__mobile`} src={mobile} alt={alt} />
      <img className={`${rootWrapper}__tablet`} src={tablet} alt={alt} />
      <img className={`${rootWrapper}__desktop`} src={desktop} alt={alt} />
    </div>
  );
};
