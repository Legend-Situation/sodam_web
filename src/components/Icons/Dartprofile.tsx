import React from "react";
import imgSrc from '@/assets/dartprofile.svg';

const Dartprofile = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'dartprofile'} {...props} />
);

export default Dartprofile;
