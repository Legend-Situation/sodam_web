import React from "react";
import imgSrc from '@/assets/close.svg';

const Close = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'close'} {...props} />
);

export default Close;
