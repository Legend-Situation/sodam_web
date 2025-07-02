import React from "react";
import imgSrc from '@/assets/note.svg';

const Note = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'note'} {...props} />
);

export default Note;
