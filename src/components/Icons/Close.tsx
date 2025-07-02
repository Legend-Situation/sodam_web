import imgSrc from '@/assets/close.svg';

const Close = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'close'} {...props} />
);

export default Close;
