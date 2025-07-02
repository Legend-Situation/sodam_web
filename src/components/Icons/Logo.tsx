import imgSrc from '@/assets/logo.svg';

const Logo = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'logo'} {...props} />
);

export default Logo;
