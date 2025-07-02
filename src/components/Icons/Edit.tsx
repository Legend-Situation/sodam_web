import React from "react";
import imgSrc from '@/assets/edit.svg';

const Edit = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'edit'} {...props} />
);

export default Edit;
