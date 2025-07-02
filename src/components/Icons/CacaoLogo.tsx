import imgSrc from '@/assets/cacaoLogo.svg';

const CacaoLogo = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'cacaoLogo'} {...props} />
);

export default CacaoLogo;
