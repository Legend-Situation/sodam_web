import React from "react";
import imgSrc from '@/assets/grayhome.svg';

const Grayhome = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'grayhome'} {...props} />
);

export default Grayhome;
