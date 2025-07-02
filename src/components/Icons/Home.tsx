import React from "react";
import imgSrc from '@/assets/home.svg';

const Home = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'home'} {...props} />
);

export default Home;
