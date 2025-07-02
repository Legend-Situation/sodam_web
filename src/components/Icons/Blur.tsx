import React from "react";
import imgSrc from '@/assets/blur.svg';

const Blur = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'blur'} {...props} />
);

export default Blur;
