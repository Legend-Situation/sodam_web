import React from "react";
import imgSrc from '@/assets/cacaoLogo.svg';

const CacaoLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'cacaoLogo'} {...props} />
);

export default CacaoLogo;
