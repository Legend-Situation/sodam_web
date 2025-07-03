import imgSrc from '@/assets/send.svg';

const Send = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'send'} {...props} />
);

export default Send;
