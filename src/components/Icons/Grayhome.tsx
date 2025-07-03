import imgSrc from '@/assets/grayhome.svg';

const Grayhome = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'grayhome'} {...props} />
);

export default Grayhome;
