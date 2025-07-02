import imgSrc from '@/assets/market.svg';

const Market = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'market'} {...props} />
);

export default Market;
