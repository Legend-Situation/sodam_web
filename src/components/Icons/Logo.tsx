import React from "react";
import imgSrc from '@/assets/logo.svg';

const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'logo'} {...props} />
);

export default Logo;
