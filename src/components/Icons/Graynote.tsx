import React from "react";
import imgSrc from '@/assets/graynote.svg';

const Graynote = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'graynote'} {...props} />
);

export default Graynote;
