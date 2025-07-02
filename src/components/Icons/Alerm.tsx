import React from "react";
import imgSrc from '@/assets/alerm.svg';

const Alerm = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'alerm'} {...props} />
);

export default Alerm;
