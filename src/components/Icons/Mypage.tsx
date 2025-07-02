import React from "react";
import imgSrc from '@/assets/mypage.svg';

const Mypage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'mypage'} {...props} />
);

export default Mypage;
