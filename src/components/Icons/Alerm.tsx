import imgSrc from '@/assets/alerm.svg';

const Alerm = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'alerm'} {...props} />
);

export default Alerm;
