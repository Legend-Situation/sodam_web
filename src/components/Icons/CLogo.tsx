import imgSrc from '@/assets/cLogo.svg';

const CLogo = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'cLogo'} {...props} />
);

export default CLogo;
