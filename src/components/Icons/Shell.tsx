import React from "react";
import imgSrc from '@/assets/shell.svg';

const Shell = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'shell'} {...props} />
);

export default Shell;
