import React from "react";
import imgSrc from '@/assets/variant.svg';

const Variant = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'variant'} {...props} />
);

export default Variant;
