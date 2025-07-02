import React from "react";
import imgSrc from '@/assets/cLogo.svg';

const CLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'cLogo'} {...props} />
);

export default CLogo;
