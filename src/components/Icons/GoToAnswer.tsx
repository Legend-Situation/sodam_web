import React from "react";
import imgSrc from '@/assets/goToAnswer.svg';

const GoToAnswer = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'goToAnswer'} {...props} />
);

export default GoToAnswer;
