import React from "react";
import imgSrc from '@/assets/write.svg';

const Write = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'write'} {...props} />
);

export default Write;
