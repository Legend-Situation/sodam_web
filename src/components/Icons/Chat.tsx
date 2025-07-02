import React from "react";
import imgSrc from '@/assets/chat.svg';

const Chat = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'chat'} {...props} />
);

export default Chat;
