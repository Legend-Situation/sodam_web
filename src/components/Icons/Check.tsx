import React from "react";
import imgSrc from '@/assets/check.svg';

const Check = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'check'} {...props} />
);

export default Check;
