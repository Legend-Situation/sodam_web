import React from "react";
import imgSrc from '@/assets/copyIcon.svg';

const CopyIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'copyIcon'} {...props} />
);

export default CopyIcon;
