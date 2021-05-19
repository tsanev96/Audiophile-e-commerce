import React, { FC } from "react";
import { ImageDetails } from "../../../types/imageDetails";

type ImageBackgroundProps = { className?: string } & ImageDetails;

export const ImageBackground: FC<ImageBackgroundProps> = ({
  mobile,
  tablet,
  desktop,
  alt,
  className,
}) => {
  const rootWrapper = "image-background";

  return (
    <div className={`${rootWrapper} ${className}`}>
      <img className={`${rootWrapper}__mobile`} src={mobile} alt={alt} />
      <img className={`${rootWrapper}__tablet`} src={tablet} alt={alt} />
      <img className={`${rootWrapper}__desktop`} src={desktop} alt={alt} />
    </div>
  );
};
