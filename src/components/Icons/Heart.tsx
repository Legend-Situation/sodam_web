import imgSrc from '@/assets/heart.svg';

const Heart = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'heart'} {...props} />
);

export default Heart;
