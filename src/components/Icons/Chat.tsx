import imgSrc from '@/assets/chat.svg';

const Chat = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'chat'} {...props} />
);

export default Chat;
