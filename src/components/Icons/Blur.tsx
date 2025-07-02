import imgSrc from '@/assets/blur.svg';

const Blur = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'blur'} {...props} />
);

export default Blur;
