import React from "react";
import imgSrc from '@/assets/heart.svg';

const Heart = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'heart'} {...props} />
);

export default Heart;
