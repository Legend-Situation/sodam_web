import React from "react";
import imgSrc from '@/assets/dartlist.svg';

const Dartlist = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'dartlist'} {...props} />
);

export default Dartlist;
