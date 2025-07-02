import React from "react";
import imgSrc from '@/assets/arrow.svg';

const Arrow = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'arrow'} {...props} />
);

export default Arrow;
