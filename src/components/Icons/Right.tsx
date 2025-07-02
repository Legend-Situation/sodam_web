import React from "react";
import imgSrc from '@/assets/right.svg';

const Right = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'right'} {...props} />
);

export default Right;
