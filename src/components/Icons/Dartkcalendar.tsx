import React from "react";
import imgSrc from '@/assets/dartkcalendar.svg';

const Dartkcalendar = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'dartkcalendar'} {...props} />
);

export default Dartkcalendar;
