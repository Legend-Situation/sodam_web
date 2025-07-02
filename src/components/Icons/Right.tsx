import imgSrc from '@/assets/right.svg';

const Right = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'right'} {...props} />
);

export default Right;
