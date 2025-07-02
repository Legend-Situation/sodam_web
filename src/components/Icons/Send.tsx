import React from "react";
import imgSrc from '@/assets/send.svg';

const Send = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'send'} {...props} />
);

export default Send;
