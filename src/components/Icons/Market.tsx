import React from "react";
import imgSrc from '@/assets/market.svg';

const Market = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'market'} {...props} />
);

export default Market;
