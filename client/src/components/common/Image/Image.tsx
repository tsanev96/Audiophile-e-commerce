import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";

type ImageProps = ImageDetails & { className?: string };

export const Image: FC<ImageProps> = ({
  mobile,
  tablet,
  desktop,
  alt,
  className = "",
}) => {
  const rootWrapper = "image";

  return (
    <div className={`${rootWrapper} ${className}`}>
      <img className={`${rootWrapper}__mobile`} src={mobile} alt={alt} />
      <img className={`${rootWrapper}__tablet`} src={tablet} alt={alt} />
      <img className={`${rootWrapper}__desktop`} src={desktop} alt={alt} />
    </div>
  );
};
