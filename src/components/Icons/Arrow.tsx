import imgSrc from '@/assets/arrow.svg';

const Arrow = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'arrow'} {...props} />
);

export default Arrow;
